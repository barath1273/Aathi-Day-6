import { useState } from 'react'
import React from 'react'
import loginlogo from '../../assets/img/login-96.png'
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setemail] = useState('')
    const [pass, setpass] = useState('')

    const navigate = useNavigate()

    const navtofor = (e) => {
        e.preventDefault();
        navigate('/forgot')
    }

    const handlesignin = (event) => {
        event.preventDefault();

        let payload = {
            'email': email,
            'pass': pass
        }
        let token = 'This is the token'
        if (payload.email === 'admin@gmail.com' && payload.pass === '01234') {
            alert("Login Successful");
            localStorage.setItem('Auth_token', token);
            localStorage.setItem('email', email)
            document.cookie = 'auth_cookie=poeitubv*12';
            navigate('/dashboard');
        } else {
            alert('Wrong Email or Password!');
        }
    }

    const nav = useNavigate();
    const navAdmin = (e) => {
        e.preventDefault();
        nav('/admin-signin');
    }
    const navSales = (e) => {
        e.preventDefault();
        nav('/sales-signin');
    }
    const navAcc = (e) => {
        e.preventDefault();
        nav('/acc-signin')
    }

    return (
        <div className='auth-con'>
            <div className='icon-con'>
                <img src={loginlogo} alt="" />
            </div>
            <div className='auth-form'>
                <h1>Sign-In</h1>
                <form onSubmit={handlesignin}>
                    <div className="form-new">
                        <label>Email <span className='required'>*</span></label>
                        <input type="email" required value={email} onChange={(e) => setemail(e.target.value)} />
                    </div>
                    <div className="form-new">
                        <label>Password <span className='required'>*</span></label>
                        <input type="password" required value={pass} onChange={(e) => setpass(e.target.value)} />
                        <a href="" className='forgot' onClick={navtofor}>Forgot Password?</a>
                    </div>
                    <div className="form-new">
                        <button type="submit" className='button button-login'>Login</button>
                    </div>
                </form>
                <div className="auth-options">
                    <button className='button button-admin' onClick={navAdmin}>Admin</button>
                    <button className='button button-sales' onClick={navSales}>Sales</button>
                    <button className='button button-pur' onClick={navAcc}>Accountant</button>
                </div>
            </div>
        </div>
    )
}

export default Login
