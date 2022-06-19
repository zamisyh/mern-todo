import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen max-w-sm mx-auto overflow-hidden bg-white">
        <div className="px-6 py-4">
            <h2 className="text-3xl font-bold text-center">Mern Todo</h2>
            <p class="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>
            <form>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="email" placeholder="Email Address" aria-label="Email Address" />
                </div>
                <div class="w-full mt-4">
                    <input class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-md dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300" type="password" placeholder="Password" aria-label="Password" />
                </div>
                <div class="mt-4">
                    <button class="px-4 py-2 leading-5 text-white transition-colors duration-200 transform bg-gray-700 rounded hover:bg-gray-600 focus:outline-none w-full" type="button">Login</button>
                </div>
            </form>
            <div class="flex items-center justify-center py-4 text-center bg-gray-50">
                <span class="text-sm text-gray-600">Don't have an account? </span>

                <Link to="/auth/signup" class="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
            </div>
        </div>
    </div>
  ) 
}

export default Login