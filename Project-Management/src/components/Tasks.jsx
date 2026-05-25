import React from "react";
import NewTask from "./NewTask.jsx";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="mb-4 text-2xl font-bold text-stone-700">
                Tasks
            </h2>

            <NewTask onAdd={onAdd} />

            {tasks.length === 0 && (
                <p className="my-4 text-stone-800">
                    This project does not have any tasks yet...
                </p>
            )}

            {tasks.length > 0 && (
                <ul className="mt-8 rounded-md bg-stone-100 p-4">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between py-2"
                        >
                            <span>{task.text}</span>

                            <button
                                onClick={() => onDelete(task.id)}
                                className="text-stone-700 hover:text-red-500"
                            >
                                Clear
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}