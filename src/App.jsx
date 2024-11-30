
import './App.css'
import FinanceTracker from './components/FinanceTracker';
import Investment from './components/Investment';
import Profile from './components/Profile';
import Sidebar from './components/Sidebar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';


 
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className=" flex-1 p-6 bg-gray-100">
            <h1>Welcome to Dasboard</h1>
          </div>
        </div>
      )
    },
    {
      path: 'profile',
      element: (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100">
            <Profile />
          </div>
        </div>
      )
    },
    {
      path: 'finance-tracker',
      element: (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100">
            <FinanceTracker />
          </div>
        </div>
      ),
    },
    {
      path: 'investments',
      element: (
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6 bg-gray-100">
            <Investment />
          </div>
        </div>
      ),
    },
  ])

function App() {
  return <RouterProvider router={router} />;
}


export default App
