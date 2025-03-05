import { createBrowserRouter, RouterProvider } from 'react-router'
import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Paste from './components/Paste'
import ViewPaste from './components/ViewPaste'


const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div className="w-full h-full flex flex-col">
          <Navbar />
          <Home />
        </div>
    },
    {
      path: "/pastes",
      element: <div className="w-full h-full flex flex-col">
        <Navbar />
        <Paste />
      </div>
    },
    {
      path: "/pastes/:id",
      element: <div className="w-full h-full flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>,
    }
  ]
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
