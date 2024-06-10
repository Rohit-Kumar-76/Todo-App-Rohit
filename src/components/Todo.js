// src/components/Todo.js

import React from 'react';

export const Todo = ({ todo, onDelete }) => {
    return (
        <div className="my-4 p-4 bg-gray-100 rounded shadow-sm lg:w-1/3 md:w-1/2">
            <h4 className="text-lg font-bold">{todo.title}</h4>
            <p className="text-gray-700">{todo.description}</p>
            <button
                className="mt-2 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700"
                onClick={() => onDelete(todo)}
            >
                Delete
            </button>
        </div>
    );
};
