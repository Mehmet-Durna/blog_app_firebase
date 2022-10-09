import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navigationbar from '../components/Navbar';

const AppRouter = () => {
  return (
    <Router>
    <Navigationbar/>
    </Router>
  )
}

export default AppRouter