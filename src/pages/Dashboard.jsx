import React, { useState } from "react";
import TasklistComponent from '../components/TasklistComponent';
import WeatherWidget from '../components/WeatherWidget';
import '../css/dashboard.css'
import TaskStats from '../components/TaskStats';
import MiniCalendar from '../components/MiniCalendar';



const Dashboard = () => {

  return (
    <>
        <div className='dashboard flex py-10 px-5 gap-2 justify-between max-[800px]:flex-col max-[800px]:gap-10'>
          <div className='relative mt-10 h-[410px] w-full max-w-[475px] max-[800px]:max-w-full'>
            <TasklistComponent />
          </div>
          <div className='w-full max-w-[475px] max-[800px]:max-w-full max-[800px]:mt-15 max-[530px]:mt-65'>
            <div className='flex gap-10 justify-center max-[1000px]:gap-4 max-[916px]:flex-col max-[800px]:flex-row'>
              <div className='w-1/2 max-[916px]:w-full'><TaskStats /> </div>
              <div className='w-1/2 max-[916px]:w-full'><WeatherWidget /></div>       
            </div>
            <div className="mt-5">
              <MiniCalendar />
            </div>
          </div>
        </div>
    </>
  )
}

export default Dashboard