import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import styles from "./ToDoList.module.css";

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        if (inputValue.trim() === "") return; 
        const newTask = { id: Date.now(), text: inputValue, completed: false };
        setTasks([...tasks, newTask]);
        setInputValue("");
    };

    const toggleTask = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className={styles.todoContainer}>

            <div className={styles.todoInput}>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>

            <ul className={styles.todoList}>
                {tasks.map((task) => (
                    <li key={task.id} className={task.completed ? styles.completed : ""}>
                        <span onClick={() => toggleTask(task.id)}>{task.text}</span>
                        <button className={styles.deleteBtn} onClick={() => deleteTask(task.id)}>
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
