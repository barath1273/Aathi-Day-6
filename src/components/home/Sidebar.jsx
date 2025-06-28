import React, { useState } from 'react'
import logo from '../../assets/img/log-new.png'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div>
            <nav className={`nav-menu ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-con">
                    <div className="logo-con">
                        <i className="bi bi-list hamburger" onClick={toggleSidebar}></i>
                        <span className="navbar-brand mb-0 h1">POS</span>
                        <img src={logo} alt="POS Logo" />
                    </div>
                    <div className="nav-list">
                        <div className="nav-button">
                            <NavLink to='dashboard' className='nav-link'><i className="bi bi-border-all"></i>Dashboard</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='products' className='nav-link'><i className="bi bi-box-fill"></i> Products</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='sales' className='nav-link'><i className="bi bi-bag-check-fill"></i>Sales</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='quotations' className='nav-link'><i className="bi bi-envelope-paper-fill"></i>Quotations</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='adjustments' className='nav-link'><i className="bi bi-toggles"></i>Adjustments</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='transfer' className='nav-link'><i className="bi bi-arrow-left-right"></i>Transfer</NavLink>
                        </div>
                        <div className="nav-button">
                            <NavLink to='expenses' className='nav-link'><i className="bi bi-receipt"></i>Expenses</NavLink>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
