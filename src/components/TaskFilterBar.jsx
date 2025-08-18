import React from 'react'

const TaskFilterBar = ({ sortOrder, setSortOrder, priorityFilter, setPriorityFilter }) => {
  return (
    <>
       <div className=" flex flex-wrap gap-4 items-center mb-6 z-4">
      {/* Sort Dropdown */}
      <select
        className="bg-blue-100 text-gray-800  px-3 py-2 rounded outline-none focus:ring"
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Sort by Priority</option>
        <option value="high-to-low">High to Low</option>
        <option value="low-to-high">Low to High</option>
        <option value="completed">Completed</option>
      </select>

      {/* Filter Dropdown */}
      <select
        className="bg-blue-100 text-gray-800 px-3 py-2 rounded outline-none focus:ring"
        value={priorityFilter}
        onChange={(e) => setPriorityFilter(e.target.value)}
      >
        <option value="">All Priorities</option>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
    </div>
    </>
  )
}

export default TaskFilterBar
