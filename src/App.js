import React, { useState } from 'react'
import Movielist from"./Movielist";
import './App.css';
import MovieCard from './MovieCard'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import All from './All';
import Login from './Login';
const App = () => {
  
  return (
    <div className='App'>
      <Routes>
        <Route path= "/" element= {<Login/>} />
        <Route path= "/all" element= {<All/>} />

      </Routes>
      
      
      
    </div>
  )
}


export default App

