import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'

function Headercomponent() {
  return (
    <>
      <div className='Header_bg'>
        <div className="container">
          <ul className='Header_row'>
            <li className='head_list'>Todo</li>
            <li className='head_list'>Home</li>
            <li className='head_list'>About</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Headercomponent