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

    useEffect(() => {
        axios
      .get("/dashboardlist/get-tasks")
      .then((response) => {
        const data = response.data;
        let array = []
        for (let i = 0; i < data.length; i++) {
            if(data[i].username == localStorage.getItem("username")){
                array.push(response.data[i]);
            } 
        };
        setTasks(array);
      })
      .catch(() => {
        console.log("currentUser");
      });
    }, []);

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
        var updatedTasks = {
            id: taskId,
            text: newValue.text
        };
        axios.post('/dashboardlist/changeText', updatedTasks)

    };
    
    const removeTask = id => {
        const removeArr = [...tasks].filter(task => task.id !== id)
        const removedTask = [...tasks].filter(task => task.id == id)
        console.log(removedTask);
        axios.post('/dashboardlist/deleteTask', removedTask);

        setTasks(removeArr)
    }


    const completeTask = id => {
        let updatedTasks = tasks.map(task => {
            if (task.id === id) {
                task.isComplete = !task.isComplete;
                axios.post('/dashboardlist/changeCompletion', task);
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
            axios.post('/addCompletions', data[number]);
            if(data[number].numberOfTrees % 10 == 9) {
                alert("You have earned a badge!")
                }
            else {
                alert("You have planted a tree!")
                }
            })
            .catch(function (error) {
            console.log("Error while fetching market updates");
        }); 
    }
    const handleSubmit = e => {
        e.preventDefault();
        axios
      .get("/dashboardlist/get-tasks")
      .then((response) => {
        const data = response.data;
        console.log(data);
        setTasks(data);
      })
      .catch(() => {
        console.log("currentUser");
      });
    }


    return (
    
        <div className ='task-app'>
            <h1>Tasks to be completed!</h1>
            <Dashboardform onSubmit={addTask} />
            <Dashboard 
            tasks={tasks} completeTask={completeTask} removeTask={removeTask} updateTask ={updateTask}/>
        </div>
        
    )
}

export default DashboardList
