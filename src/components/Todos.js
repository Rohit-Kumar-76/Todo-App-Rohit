// src/components/Todos.js

import React from 'react';
import { Todo } from './Todo';

export const Todos = ({ todos, onDelete }) => {
    return (
        <div className="container mx-auto my-6 p-6 bg-white rounded shadow ">
            <h3 className="text-xl font-semibold mb-4">Todos List</h3>
            <div className='md:flex flex-row gap-44'>
                {todos.length === 0 ? (
                    <p className="text-gray-500">No Todos to display</p>
                ) : (
                    todos.map((todo) => {
                        return <Todo todo={todo} key={todo.sno} onDelete={onDelete} />;
                    })
                )}
            </div>
        </div>
    );
};
