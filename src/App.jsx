import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


 
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100">
            <h1>Welcome to Dasboard</h1>
          </div>
        </div>
      )
    }
  ])

function App() {
  return <RouterProvider router={router} />;
}


export default App
