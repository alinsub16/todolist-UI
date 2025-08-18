import { useEffect, useState } from 'react';
import TasklistComponent from '../components/TasklistComponent';



const TaskList = () => {



  return (
    <>
     <div className="max-w-5xl mx-auto w-full mt-5 relative  px-5 max-[800px]:pb-5 max-[530px]:px-3">
      <h2 className="text-2xl font-bold text-white mb-6">📋 Task List</h2>
      <TasklistComponent />
     
    </div>
    
    </>
    
  )
}

export default TaskList