import React, { useState } from "react";

export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState("");

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleAddTask() {
        const trimmedTask = enteredTask.trim();

        if (!trimmedTask) {
            return;
        }

        onAdd(trimmedTask);
        setEnteredTask("");
    }

    function handleKeyDown(event) {
        if (event.key === "Enter") {
            handleAddTask();
        }
    }

    return (
        <div className="flex items-center gap-4">
            <input
                type="text"
                value={enteredTask}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Enter a new task..."
                className="w-64 px-3 py-2 rounded-md bg-stone-200 text-stone-700 focus:outline-none focus:ring-2 focus:ring-stone-400"
            />

            <button
                onClick={handleAddTask}
                className="px-4 py-2 rounded-md text-stone-700 hover:text-stone-950 hover:bg-stone-200 transition-colors"
            >
                Add Task
            </button>
        </div>
    );
}