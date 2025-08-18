export const filterAndSortTasks = (tasks, priorityFilter, sortOrder) => {

    if(!Array.isArray(tasks)) return [];

    let filtered =  [...tasks];

    if (priorityFilter){
        filtered = filtered.filter(task => task.priority === priorityFilter);
    }
    const priorityRank = {high: 3, medium:2, low: 1};

    if (sortOrder === 'high-to-low'){
        filtered.sort((a,b) => priorityRank[b.priority] - priorityRank[a.priority])
    }
    else if(sortOrder === 'low-to-high'){
        filtered.sort((a, b) => priorityRank[a.priority] - priorityRank[b.priority]);
    }
    else if(sortOrder === 'completed'){
        filtered = filtered.filter(task => task.completed === true);
    }
    return filtered; 
}