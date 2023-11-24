
import './App.css';
import React, { useState, useEffect } from 'react';

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from './pages/Home'


import Layout from './components/Layout/Layout';
import BookDetails from './components/books/BookDetails';
function App() {


  return (

    <div className='app'>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/books/:id" element={<BookDetails />} />
          </Route>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
