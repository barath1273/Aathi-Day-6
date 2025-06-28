import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Layout from '../home/Layout'
import Sidebar from './Sidebar'

const Home = () => {
  return (
    <div>
        <div className="home">
                    <Sidebar />
          <div className="main">
            <Outlet />
          </div>
        </div>       
    </div>
  )
}

export default Home
