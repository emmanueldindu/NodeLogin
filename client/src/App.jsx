import React from "react";
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Username from './components/Username'
import Recovery from './components/Recovery'
import Profile from './components/Profile'
import Reset from './components/Reset'
import PageNotFound from './components/PageNotFound'
import Password from './components/Password'
import Register from './components/Register'




const router = createBrowserRouter([
  {
    path: '/',
    element: <Username></Username>

  },

  {
    path: '/register',
    element: <Register></Register>
  },

  {
    path: '/recovery',
    element: <Recovery></Recovery>
  },
  {
    path: '/password',
    element: <Password></Password>
  },

  {
    path: '/recovery',
    element: <Profile></Profile>
  },
  
  {
    path: '/reset',
    element: <Reset></Reset>
  },

  {
    path: '*',
    element: <PageNotFound></PageNotFound>
  },

])


export default function App() {
  return (
    <main>
      <RouterProvider router={router}></RouterProvider>
  </main>
  )
}