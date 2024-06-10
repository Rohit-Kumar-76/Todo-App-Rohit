// src/components/AddTodo.js

import React, { useState } from 'react';

export const AddTodo = ({ addTodo }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title || !description) {
            alert("Title or Description cannot be blank");
        } else {
            addTodo(title, description);
            setTitle("");
            setDescription("");
        }
    };

    return (
        <div className="container mx-auto my-6 p-6 bg-white rounded shadow lg:w-1/2">
            <h3 className="text-xl font-semibold mb-4">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-4">
                    <label className="block text-gray-700">Todo Title</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Todo Description</label>
                    <input
                        type="text"
                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full lg:w-auto">Add Todo</button>
            </form>
        </div>
    );
};
