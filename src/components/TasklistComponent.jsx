import { useEffect, useState } from 'react';
import { CheckCircle, Trash2, Edit3, Clock, Calendar, Tag } from 'lucide-react';
import IconButton from '../components/IconButton';
import API from '../api'
import SkeletonLoader2 from './SkeletonLoader2';
import DeleteConfirmModal from '../components/DeleteConfirmModal';
import EditTaskModal from '../components/EditTaskModal';
import PaginationControls from './PaginationControls';
import { filterAndSortTasks } from '../utils/filterTasks';
import TaskFilterBar from './TaskFilterBar';
import '../css/media.css'

const getPriorityColor = (priority) => {
  switch (priority) {
    case 'high':
      return 'text-red-500';
    case 'medium':
      return 'text-yellow-400';
    case 'low':
      return 'text-green-400';
    default:
      return '';
  }
};

const TasklistComponent = () => {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [allTasks, setAllTasks] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(4);
  const [totalPages, setTotalPages] = useState(1);
  const [priorityFilter, setPriorityFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('');


  // handle updates function
const handleEdit = (task) => {
  setSelectedTask(task);
  setIsEditOpen(true);
};

// this function trigger when the update modal done to update
const handleUpdate = async (updatedTask) => {
  try{
    const response = await API.put(`/todos/${updatedTask._id}`, updatedTask);
    setTasks((prev) => 
      prev.map((t) => (t._id === updatedTask._id ? response.data : t))
    );
    setAllTasks((prev) => prev.map((t) => t._id === updatedTask._id ? response.data : t))
    setIsEditOpen(false);
  } catch(error){
    console.error('Error updating task:', error)
  }

}
//  This function is to confirm if the data need to be delete
const confirmDelete = (_id) => {
  setSelectedTaskId(_id);
  setShowDeleteModal(true);
}

//  This function is to cancel delete confirmation
const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setSelectedTaskId(null);
  };

// To delete data from database
const handleDeleteConfirmed = async (_id) => {
  try {
    await API.delete(`/todos/${selectedTaskId}`);
    setTasks(prev => prev.filter(task => task._id !== selectedTaskId)); 
    setAllTasks(prev => prev.filter(task => task._id !== selectedTaskId)); 
  } catch (error) {
    console.error('Error deleting task:', error);
    alert('Failed to delete task. Please try again.');
  }finally{
    setShowDeleteModal(false);
    setSelectedTaskId(null);
  }
};

// fetching data from data base
useEffect(() => {
  const fetchTasks = async () => {
    try {
      setLoading(true);
      const response = await API.get('/todos');
      const allTasks = response.data;
      console.log('Fetched tasks:', response.data);
      
      // response.data is directly the array
      if (Array.isArray(response.data)) {
        setAllTasks(allTasks);
        setTotalPages(Math.ceil(allTasks.length / limit));
        setTasks(allTasks.slice((page - 1) * limit, page * limit));
      } else {
        console.error('Expected an array but got:', response.data);
        setTasks([]);
      }

    } catch (error) {
      console.error('Error fetching tasks:', error);
    }finally{
      setLoading(false);
    }
  };

  fetchTasks();
}, []);

// this is handle pagination logic
useEffect(() => {
  if (Array.isArray(allTasks)){
    const filtered = filterAndSortTasks(allTasks, priorityFilter, sortOrder);
    const start = (page -1) * limit;
    const end = page * limit;

    setTotalPages(Math.ceil(filtered.length / limit));
    setTasks(filtered.slice(start, end));

  }
}, [page, limit, allTasks, sortOrder, priorityFilter]);


if(loading) return  <SkeletonLoader2/>;

  return (
    <>
        <div className='taskbarfilter absolute right-16 top-0 '>
          <TaskFilterBar
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
              priorityFilter={priorityFilter}
              setPriorityFilter={setPriorityFilter}
              onClear={() => {
                setSortOrder('');
                setPriorityFilter('');
              }}
            />
        </div>
       <div className="grid gap-4">
        
        {tasks.map((task) => (
          <div
            key={task._id}
            className=" p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex justify-between items-start max-[530px]:flex-col max-[530px]:gap-5"
          >
            {/* Left Side */}
            <div className="flex items-start gap-3">
              <button title="Toggle Complete">
                <CheckCircle
                  className={`w-6 h-6 ${
                    task.completed ? 'text-green-400' : 'text-white/40'
                  }`}
                />
              </button>
              <div>
                <h3 className={`font-semibold ${task.completed ? 'line-through text-gray-400' : ''}`}>
                  {task.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-white/70 mt-1">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {task.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {task.time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    {task.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-2">
              <span
                className={`text-xs font-medium px-2 py-1 rounded-full border border-white/20 ${getPriorityColor(
                  task.priority
                )}`}
              >
                {task.priority}
              </span>
              <IconButton
                icon={<Edit3 className="w-5 h-5" />}
                title="Edit"
                onClick={() => handleEdit(task)}
                color="text-blue-400 hover:text-blue-500"
              />
              <IconButton
                icon={<Trash2 className="w-5 h-5" />}
                title="Delete"
                onClick={() => confirmDelete(task._id)}
                color="text-red-400 hover:text-red-500"
              />
             
            </div>
          </div>
        ))}

        {/* update modal  */}
      </div>
       <DeleteConfirmModal
        isOpen={showDeleteModal}
        onCancel={handleCancelDelete}
        onConfirm={handleDeleteConfirmed}
      />
      {isEditOpen && selectedTask && (
        <EditTaskModal
          task={selectedTask}
          onClose={() => setIsEditOpen(false)}
          onUpdate={handleUpdate}
        />
      )}

        <PaginationControls page={page} totalPages={totalPages} setPage={setPage}/>
      
    </>
  )
}

export default TasklistComponent
