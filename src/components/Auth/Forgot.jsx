import React from 'react'
import './Auth.css';
import loginlogo from '../../assets/img/login-96.png';
import { useNavigate } from 'react-router-dom';

const Forgot = () => {
    const navigate=useNavigate();
    // const navitolog=(e)=>{
    //     e.preventDefault();
    //     navigate('/');
    // }
    const sendlink =(e)=>{
        e.preventDefault();
        alert("Reset Mail Sent!")
    }
    return (
        <div>
            <div className='auth-con'>
                <div className='icon-con'>
                    <img src={loginlogo} alt="" />
                </div>
                <div className='auth-form'>
                    <h1>Forgot-Password?</h1>
                    <form   onSubmit={sendlink}>
                        <div className="form-group">
                            <label>Email <span className='required'>*</span></label>
                            <input type="email" name="" id=""  placeholder='Enter your Email' required />
                        </div>
                        <div className="form-group">
                            <a href="" className='forgot' onClick={(e)=>{e.preventDefault(); navigate('/');}}>Back to Sign-In</a>
                        </div>
                        <div className="form-group">
                            <button type="submit" className='btn btn-login'>Send the Reset Link</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Forgot
