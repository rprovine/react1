import React from 'react';

export default function Navbar() {
  return (
    <nav className='font-sans flex items-center bg-black h-20 text-white p-8'>
        <img className="h-12 mr-4" src="../public/reacticon.webp" alt="React Logo" />
        <h3 className="mr-auto text-sky-300 font-bold text-lg"> ReactFacts</h3>
        <h4 className="font-semibold">React Course - Project 1</h4>
    </nav>
  );
}