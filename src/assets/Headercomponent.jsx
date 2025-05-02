import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react'
import TodoApi from './TodoApi';
import Newtest from './Newtest';

function Headercomponent() {
  return (
    <>
      <Router>
        <div className='Header_bg'>  
            <div className="container">  
              <nav className='Header_row'>
                  <Link className='head_list' to="/">Newtest</Link>
                  <Link className='head_list' to="/todoapi">TodoApi</Link>
              </nav>
            </div>
        </div>

        <Routes>
          <Route path="/todoapi" element={<TodoApi />} />
          <Route path="/" element={<Newtest />} />
        </Routes>
    </Router>
    </>
  )
}

export default Headercomponent