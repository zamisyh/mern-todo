import React from 'react'
import Login from '../pages/Auth/Login'
import Register from '../pages/Auth/Register'

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/Home/Home'

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* <Route exact path="/" element={<Navigate to="/auth/login" />} /> */}
                <Route exact path="/" element={<Home />} />
                <Route exact path="/auth/login" element={<Login/>} />
                <Route exact path="/auth/signup" element={<Register/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router