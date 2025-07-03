import React, { useState } from 'react'
import logo from '../../assets/img/log-new.png'
import './Sidebar.css'
import { Link, NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true)
    const [isDropOpen, setIsDropOpen] = useState(false)

    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }

    const toggleDropdown = () => {
        setIsDropOpen(!isDropOpen)
    }

    const nav = useNavigate()
    const logout = (e) => {
        e.preventDefault();
        nav('/')
    }

    const menuItem = [
        { name: 'Dashboard', link: '/dashboard', icon: 'bi bi-border-all' },
        { name: 'Products', link: '/products', icon: 'bi bi-box-fill', hasDropdown: true },
        { name: 'Sales', link: '/sales', icon: 'bi bi-bag-check-fill' },
        { name: 'Quotations', link: '/quotations', icon: 'bi bi-envelope-paper-fill' },
        { name: 'Adjustments', link: '/adjustments', icon: 'bi bi-toggles' },
        { name: 'Transfer', link: '/transfer', icon: 'bi bi-arrow-left-right' },
        { name: 'Expenses', link: '/expenses', icon: 'bi bi-receipt' },
        //new
    ];
    const dropItem = [
        { name: 'All Products', link: 'products', icon:'bi bi-box-fill'},
        { name: 'Add New', link: 'add-new' , icon:'bi bi-plus-circle-fill'},
        { name: 'Categories', link: 'categories', icon:'bi bi-bookmark-fill' },
    ]


    return (
        <div>
            <nav className={`nav-menu ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-con">
                    <div className="logo-con">
                        <i className="bi bi-list hamburger" onClick={toggleSidebar}></i>
                        <span className="navbar-brand mb-0 h1">POS</span>
                        <img src={logo} alt="POS Logo" />
                    </div>
                    {
                        menuItem.map((item, index) => (
                            <div className="nav-button" key={index}>
                                {item.hasDropdown ? (<>
                                    <div className='nav-link dropdown-toggle' onClick={toggleDropdown}>
                                        <i className={item.icon}></i> {item.name}
                                        <i className={isDropOpen ? 'bi bi-chevron-up' : 'bi bi-chevron-down'} style={{  cursor:'pointer' }}></i>
                                    </div>
                                    {isDropOpen && (
                                        <div className='dropdown-menu'>
                                            {dropItem.map((dropItem, dropIndex) => (
                                                <NavLink key={dropIndex} to={dropItem.link} className='dropdown-item'>
                                                    <i className={dropItem.icon}></i>{dropItem.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    )}
                                </>
                                ) : <NavLink to={item.link} className='nav-link'><i className={item.icon}></i>{item.name}</NavLink>}                            
                            </div>
                        ))
                    }
                </div>
                <div className={`logout ${isOpen ? 'expanded' : 'collapsed'}`}>
                    <button type="button" className="logout-button" onClick={logout}>
                        <i className="bi bi-box-arrow-left"></i>
                        {isOpen && <span>Log Out</span>}
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Sidebar
