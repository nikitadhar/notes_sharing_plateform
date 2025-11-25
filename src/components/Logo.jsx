import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    // <a href='/'>    <h1 className="text-2xl font-bold text-blue-600">NoteShare</h1></a> 
    //  <a href='/' className="">   <img src="/images/notes_logo.png" alt="notes" className="w-20 h-20 mx-auto inline-block"/></a> 

    <div className="flex justify-center">
      <a href="/" className="inline-block">
        <img
          src="/images/notes_logo.png"
          alt="notes"
          className="w-20 h-20"
        />
      </a>
    </div>



  )
}
