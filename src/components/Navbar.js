// src/components/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';
import img from '../todo1.png'

export const Navbar = () => {
    return (
        <nav className="bg-blue-500 text-white p-2">
            <div className="container mx-auto flex pe-3 items-center">
                <img className='h-10' src={img} />
                <Link className="text-2xl font-bold" to="/">My Todo List </Link>
                <div className="flex space-x-4 px-6">
                    <Link className="hover:underline" to="/">Home</Link>
                    <Link className="hover:underline" to="/about">About</Link>
                </div>
            </div>
        </nav>
    );
};
