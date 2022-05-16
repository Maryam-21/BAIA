import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';
import DataComponent from './components/DataComponent';
import React, { Component }  from 'react';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index path='/' element={<LoginPage />} />
        <Route path="/HomePage/:name/:compName/:id" element={<DataComponent />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;