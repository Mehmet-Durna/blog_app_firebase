import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigationbar from '../components/Navbar';
import Dashboard from '../pages/Dashboard';

const AppRouter = () => {
  return (
    <Router>
    <Navigationbar/>
    <Dashboard/>
    </Router>
  )
}

export default AppRouter