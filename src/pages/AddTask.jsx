import React, { useState } from 'react';
import { Calendar, Clock, ListTodo, StickyNote, Tag, AlertCircle, Plus } from 'lucide-react';
import Button from '../components/Button';
import API from '../api';


const AddTask = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState ('');
  const [category, setCategory] = useState('Work');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [priority, setPriority] = useState('low');
  const [popupMessage, setPopupMessage] = useState('');
  
  const handleSumbit = async (e) => {
    e.preventDefault();
     const today = new Date().setHours(0, 0, 0, 0);
    const selectedDate = new Date(date).setHours(0, 0, 0, 0);

    // this condition check if the date added is not past
    if (selectedDate < today) {
      setPopupMessage("⚠️ You cannot select a past date.");
      setTimeout(() => setPopupMessage(''), 3000); // auto hide after 3s
      return;
    }

    const newTask = {
      title, 
      description, 
      category,
      date,
      time,
      priority,
    };
    try{
      const response = await API.post('/todos', newTask)
      console.log('Task added:', response.data)

      setTitle('');
      setDescription('');
      setCategory('Work');
      setDate('');
      setTime('');
      setPriority('low');
      setPopupMessage("✅ Task added successfully!");
      setTimeout(() => setPopupMessage(''), 3000);
    }catch(error){
      console.error('Error adding task:', error)
      setPopupMessage("❌ Failed to add task.");
      setTimeout(() => setPopupMessage(''), 3000);
    }
  };
  
  return (
    <div>
      {/* 🔔 Popup Message */}
      {popupMessage && (
        <div className="fixed top-22 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50 animate-fade-in">
          <span>{popupMessage}</span>
        </div>
      )}
      <div className="w-full max-w-2xl mx-auto p-6 bg-white/10 backdrop-blur-md border border-black/50 rounded-2xl shadow-md text-white mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
        <ListTodo className="w-6 h-6" /> Add a New Task
      </h2>

      <form className="grid gap-4" onSubmit={handleSumbit}>
        <div className="relative">
          <StickyNote className="absolute left-3 top-3 w-5 h-5 text-white/60" />
          <input
            type="text"
            placeholder="Task Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-black/50  border border-white/90 rounded-md placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
            required
          />
        </div>

        <div className="relative">
          <Tag className="absolute left-3 top-3 w-5 h-5 text-white/60" />
          <textarea
            placeholder="Task Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="pl-10 pr-4 py-2 w-full bg-black/50 border border-white/90 rounded-md placeholder-white/70 h-24 resize-none focus:outline-none focus:ring-2 focus:ring-white/30"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <select className="px-4 py-2 border bg-black/50 border-white/90 rounded-md focus:outline-none text-white bg-black/50" 
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option>Work</option>
            <option>Personal</option>
            <option>Study</option>
          </select>

          <div className="relative">
            <Calendar className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/50 w-full border border-white/90 rounded-md text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <Clock className="absolute left-3 top-3 w-5 h-5 text-white/60" />
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="pl-10 pr-4 py-2 bg-black/50 w-full border border-white/90 rounded-md text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30"
              required
            />
          </div>

          <div className="flex items-center justify-around text-sm">
            {['low', 'medium', 'high'].map((level) => (
                <label key={level}>
                <input 
                type= "radio"
                name="priority"
                value={level}
                checked={priority === level}
                onChange={() => setPriority(level)}
                required
                />
                <span>{level.charAt(0).toUpperCase() + level.slice(1)}</span>
                </label>

            ))}
          </div>
        </div>

        <Button label='Add Task' icon={<Plus />}  type="submit"
        />
      </form>
    </div>
    </div>
  )
}

export default AddTask