import React, { useState } from "react";
import Sidebar from '../components/Sidebar'
import Dashboard from './Dashboard'
import TaskList from './TaskList'
import AddTask from './AddTask'
import Weather from './Weather'
import Header from "../components/Header";
import '../css/media.css'


const Home = () => {

    const [activeTab, setActiveTab] = useState("Dashboard");

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <Dashboard />;
      case "Add Task":
        return <AddTask />;
      case "Task List":
        return <TaskList />;
      case "Weather":
        return <Weather />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className='main-container p-10 w-full max-w-[1400px] rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70 border border-gray-100 flex gap-10 '>
        <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
        <main className='w-full max-w-[1030px]  bg-white/10 backdrop-blur-md text-white shadow-lg rounded-2xl border-r border-white/20 relative max-[1200px]:max-w-full'>
          <Header />
          {renderContent()}
        </main>
    </div>
  )
}

export default Home