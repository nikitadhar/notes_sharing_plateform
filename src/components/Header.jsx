import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <nav className="p-4 flex justify-between items-center shadow bg-white">
    <Logo/>
        <div>
          <a href="login" className="mr-4 text-blue-500 hover:underline">Login</a>
          <a href="register" className="text-blue-500 hover:underline">Register</a>
        </div>
      </nav>
  )
}
