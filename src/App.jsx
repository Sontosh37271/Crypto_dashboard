import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './pages/Dashboard/Dashboard'
import Transaction from './pages/Transaction/Transaction.jsx';
import Support from './pages/Support/Support.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element:<Dashboard /> ,
  },
  {
    path:"/transactions",
    element:<Transaction />
  },
  {
    path:"/support",
    element:<Support/>
  }
]);

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <RouterProvider router={router} />     
    </div>
     
  )
}

export default App
