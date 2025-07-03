import { useState } from 'react'
import React from 'react'
import adminlogo from '../../assets/img/admin-96.png'
import './Admin.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Ad_login = () => {
    let [email,setemail]=useState('')
    let [pass,setpass]=useState('')

    const navigate = useNavigate()
    const navtofor= (e)=>{
        e.preventDefault();
        navigate('/forgot')
    }
    const adminsignin = function (event){
        event.preventDefault();
        // if(email=='alpha@gmail.com' && pass=='11111'){
        //     alert("Login Successful");
        //     navigate('/home');
        // }else{
        //     alert('Wrong Password!')
        // }
        let payload={
            'email':email,
            'pass':pass
        }
        let token='This is the token'
        if(payload.email=='alpha@gmail.com' && payload.pass=='09876'){
             alert("Login Successful");
             localStorage.setItem('Auth_token',token);
             localStorage.setItem('email',email)
             document.cookie = 'auth_cookie=poeitubv*12';
             navigate('/home');
        }else {
        alert('Wrong Email or Password!');
    }
    }
    
    return (
        <div className='auth-con'>
            <div className='icon-con'>
                <img src={adminlogo} alt="" />
            </div>
            <div className='auth-form'>
                <h1>Admin Sign-In</h1>
                <form onSubmit={adminsignin}>
                    <div className="form-new">
                        <label>Email <span className='required'>*</span></label>
                        <input type="email" name="" id="" required value={email} onChange={(e)=>{setemail(e.target.value)}} />
                    </div>
                    <div className="form-new">
                        <label>Password <span className='required'>*</span></label>
                        <input type="password" name="" id="" required value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
                        <a href="" className='forgot' onClick={navtofor} >Forgot Password?</a>
                    </div>
                    <div className="form-new">
                        <button type="submit" className='btn btn-login'>Login</button>
                    </div>
                </form>
                {/* <div className="auth-options">
                    <button className='btn btn-admin'>Admin</button>
                    <button className='btn btn-sales'>Sales</button>
                    <button className='btn btn-pur'>Purchases</button>
                </div> */}
            </div>
        </div>
    )
}

export default Ad_login
