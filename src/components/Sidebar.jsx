import React from 'react'
import { Home, PlusCircle, List, Cloud } from "lucide-react";
import '../css/media.css'

const Sidebar = ({ activeTab, onTabChange }) => {
    const tabs = [
    { label: "Dashboard", icon: <Home size={20} /> },
    { label: "Add Task", icon: <PlusCircle size={20} /> },
    { label: "Task List", icon: <List size={20} /> },
    { label: "Weather", icon: <Cloud size={20} /> },
  ];
  return (
    <>
   <aside className="side-nav-con w-64 h-[600px] bg-white/10 backdrop-blur-md text-white shadow-lg rounded-2xl border-r border-white/20 ">
      <div className="text-2xl font-bold p-6 border-b border-white/10">
        To-Do App
      </div>
      <nav className="flex flex-col p-4 gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => onTabChange(tab.label)}
            className={`flex items-center gap-3 px-4 py-2 rounded-lg transition text-left ${
              activeTab === tab.label
                ? "bg-white/20 font-semibold"
                : "hover:bg-white/10"
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </nav>
    </aside>
        
    </>
  );
};

export default Sidebar