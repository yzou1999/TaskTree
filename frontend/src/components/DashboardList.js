import React, {useEffect, useState} from 'react'
import Dashboard from './Dashboard';
import Dashboardform from './Dashboardform'
import axios from 'axios';
import moment from 'moment';
import Calendar from './Calendar';
import Navbar from './Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
        axios.get('/users')
        .then((response) => {
            const data = response.data;
            var number = {};
            for (let i = 0; i < response.data.length; i++) {
                if(response.data[i].username == localStorage.getItem("username")){
                    number = i;
                }
            }
            console.log(data[number].numberOfTrees)
            if(data[number].numberOfTrees % 10 == 9) {
                axios.post('/addTree', data[number])
                console.log('accessed')
            }
            axios.post('/addBadge', data[number]);
            console.log(data) 
            })
            .catch(function (error) {
            console.log("Error while fetching market updates");
        }); 
        alert("You have earned a badge!")
    }


    return (
    
        <div className ='task-app'>
            <h1>Tasks to be completed!</h1>
            <Dashboardform onSubmit={addTask} />
            <Dashboard 
            tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask ={updateTask}/>
            <a href = "\calendar">Calendar</a>
            
        </div>
        
    )
}

export default DashboardList
