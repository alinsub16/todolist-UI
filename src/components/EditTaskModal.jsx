import React, { useState } from 'react'
import { X } from 'lucide-react';
import Button from './Button';

const EditTaskModal = ({ task, onClose, onUpdate }) => {
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description || '');
    const [category, setCategory] = useState(task.category || '');
    const [date, setDate] = useState(task.date || '');
    const [time, setTime] = useState(task.time || '');
    const [priority, setPriority] = useState (task.priority || 'low');
    const [completed, setCompleted] = useState (task.completed || false)

    const handleSubmit = (e) => {
        e.preventDefault();
        onUpdate({
            ...task,
            title,
            description,
            category,
            date,
            time,
            priority,
            completed,
        })

    }
 
  return (
    <>
        <div className="fixed inset-0 bg-black/20 flex justify-center items-center z-50 inset-0  backdrop-blur-[2px] ">
            <div className="bg-black/60 p-6 rounded-lg w-full max-w-md relative ">
                <button className="absolute top-3 right-3 text-gray-500 hover:opacity-50" onClick={onClose}>
                <X />
                </button>
                <h2 className="text-lg font-semibold mb-4">Edit Task</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Task Title"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                    placeholder="Task Description"
                />
                 <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full p-2 border rounded"
                >
                    <option  value="" disabled selected>Select Category</option>
                    <option className='bg-black/70 rounded-none' value="Work">Work</option>
                    <option className='bg-black/70 rounded-none' value="Personal">Personal</option>
                    <option className='bg-black/70 rounded-none' value="Study">Study</option>
                </select>
                <select
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    className="w-full p-2 border rounded  "
                >
                    <option className='bg-black/70 rounded-none' value="low">Low Priority</option>
                    <option className='bg-black/70 rounded-none' value="medium">Medium Priority</option>
                    <option className='bg-black/70 rounded-none' value="high">High Priority</option>
                </select>
                <label className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={completed}
                    onChange={() => setCompleted(!completed)}
                    />
                    Mark as Completed
                </label>

                <Button variant="green" label="Update Task" type="submit" />
                </form>
            </div>
        </div>
    </>
  )
}

export default EditTaskModal
