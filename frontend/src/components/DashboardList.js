import React, {useState} from 'react'
import Dashboard from './Dashboard';
import Dashboardform from './Dashboardform'

function DashboardList() {
    const [tasks, setTasks] = useState([])

    const addTask = task => {
        if(!task.text || /^\s*$/.test(task.text)) {
            return
        }
        
        const newTasks = [task, ...tasks]

        setTasks(newTasks)
    };

    
    const updateTask = (taskId, newValue) => {
        if(!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTasks(prev => prev.map(item => (item.id === taskId ? newValue : item)));

    };
    
    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)

        setTasks(removeArr)
    }


    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete
            }
            return task
        });
        setTasks(updatedTasks);
    }

    return (
        <div>
            <h1>Tasks to be completed!</h1>
            <Dashboardform onSubmit={addTask} />
            <Dashboard 
            tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask ={updateTask}/>
            
        </div>
    )
}

export default DashboardList
