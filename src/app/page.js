"use client";

import React, { useState } from 'react';
import '../style.css';

export default function Home() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState({ name: '', date: '', time: '', description: '' });

    // Function to add a new task
    const addTask = () => {
        const { name, date, time, description } = taskInput;
        if (!name || !date || !time || !description) {
            alert('All fields are required!');
            return;
        }
        setTasks([...tasks, taskInput]);
        setTaskInput({ name: '', date: '', time: '', description: '' });
    };

    // Function to delete a task
    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    // Function to render task list
    const renderTasks = () => {
        if (tasks.length === 0) {
            return <p className="no-tasks">No tasks available.</p>;
        }

        return tasks.map((task, index) => (
            <li key={index} className="task-item">
                <p><strong>Name:</strong> {task.name}</p>
                <p><strong>Date:</strong> {task.date}</p>
                <p><strong>Time:</strong> {task.time}</p>
                <p><strong>Description:</strong> {task.description}</p>
                <button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
            </li>
        ));
    };

    return (
        <div className="task-manager">
            <h1 className="title">Task Management System</h1>
            <div className="input-container">
                <input
                    type="text"
                    className="input-field"
                    placeholder="Task Name"
                    value={taskInput.name}
                    onChange={(e) => setTaskInput({ ...taskInput, name: e.target.value })}
                />
                <input
                    type="date"
                    className="input-field"
                    value={taskInput.date}
                    onChange={(e) => setTaskInput({ ...taskInput, date: e.target.value })}
                />
                <input
                    type="time"
                    className="input-field"
                    value={taskInput.time}
                    onChange={(e) => setTaskInput({ ...taskInput, time: e.target.value })}
                />
                <input
                    type="text"
                    className="input-field"
                    placeholder="Task Description"
                    value={taskInput.description}
                    onChange={(e) => setTaskInput({ ...taskInput, description: e.target.value })}
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>
            <ul className="task-list">
                {renderTasks()}
            </ul>
        </div>
    );
}

