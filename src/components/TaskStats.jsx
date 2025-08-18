import React, { useEffect, useState } from "react";
import API from '../api'
import SkeletonLoader from "./SkeletonLoader";
import "react-circular-progressbar/dist/styles.css";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";


const TaskStats = () => {
    const [task, setTasks] = useState([]);
    const [loading, SetLoading] = useState(true);

    useEffect(() => {
        const fetchtasks = async () => {
            try{
                SetLoading(true);
                const response = await API.get('/todos');
                const alltask = response.data

                if (Array.isArray(response.data)) {
                setTasks(alltask);
                }
                else{
                    console.error('Expected an array but got:', response.data);
                    setTasks([]);
                }

            }catch(error) {
                console.error('Error fatching data:', error);
            }finally{
                SetLoading(false);
            }
        };
        fetchtasks();
    }, []);

    if (loading) return <SkeletonLoader className='h-43 w-full'/>
    if(task.length === 0) return <div><p>No data available</p></div>

    const totalTasks = task.length;
    const completedTasks = task.filter(task => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const completedPercentage = totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
    const pendingPercentage = totalTasks > 0 ? (pendingTasks / totalTasks) * 100 : 0;

  return (
    <>
      <div className="w-full max-w-xs bg-blue-100 rounded-2xl shadow-lg p-3 m-auto text-gray-800">
        <h2 className="text-2xl font-semibold mb-2 text-center">Task Overview</h2>

        <div className="flex justify-between mb-3">
          <div className="flex flex-col items-center">
            <span className="text-green-400 text-2xl font-bold">{completedTasks}</span>
            <span className="text-sm">Completed</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-400 text-2xl font-bold">{pendingTasks}</span>
            <span className="text-sm">Pending</span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full border border-gray-500 rounded-full h-3 overflow-hidden">
          <div
            className="bg-green-400 h-3 rounded-full"
            style={{ width: `${completedPercentage}%` }}
          ></div>
        </div>

        {/* Total */}
        <p className="text-center text-sm mt-3 opacity-80">
          Total Tasks: <span className="font-semibold">{totalTasks}</span>
        </p>
      </div>
    </>
  )
}

export default TaskStats
