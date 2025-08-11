import React from 'react'

export default function Header() {
  return (
    <nav className="p-4 flex justify-between items-center shadow bg-white">
    <a href='/'>    <h1 className="text-2xl font-bold text-blue-600">NoteShare</h1></a> 
        <div>
          <a href="login" className="mr-4 text-blue-500 hover:underline">Login</a>
          <a href="register" className="text-blue-500 hover:underline">Register</a>
        </div>
      </nav>
  )
}
