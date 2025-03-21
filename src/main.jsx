import { createRoot } from 'react-dom/client'
import React from 'react';
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import Header from './components/ui/custom/Header'
import CreateTrip from './create-trip/CreateTrip';
import { Toaster } from './components/ui/sonner';
const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },
  {
    path:'/create-trip',
    element:<CreateTrip/>
  }

])
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header/>
    <Toaster/>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
