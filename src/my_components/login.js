import React, { useContext, useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { CgPassword } from "react-icons/cg";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import AgencyContextApi from './agencyContextApi';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(true);
    const navigate = useNavigate();
    const { createAgentId } = useContext(AgencyContextApi);
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (email.length === 0 || password.length === 0) {
            setError('Please fill in all fields');
            return;
        }
        try {
            const response = await axios.post('http://localhost:8081/api/auth/login', {
                email: email,
                password: password
            });
            setEmail("");
            setPassword("");
            createAgentId(response.data.agentId);
            navigate("/requests");
        } catch (error) {
            console.error('Error:', error);
            setError("Invalid email or password. Please try again.")
        }
    };
 
  return (
        <>
            <div id='loginPage'>
                <div className='background'></div>
                <div className='login-container'>
                    <div className='title'>
                        <h2>TRAVEL AGENCY SIGN IN FORM</h2>
                    </div>
                    <div className='form-container'>
                        <div className='form-img'>
                            <img src='./img/login-bg2.jpg'/>
                        </div>
                        <div className='form'>
                            <form>
                                <div className='form-title'>
                                    <h3>Sign In</h3>
                                </div>
                                <p className='loginError'>{error}</p>
                                <div className='input-fluid'>
                                    <label htmlFor='email'>E-mail</label>
                                    <div className='input-box'>
                                        <TfiEmail />
                                        <input  type='email' 
                                                name='email' 
                                                id='email'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='input-fluid'>
                                    <label htmlFor='password'>Password</label>
                                    <div className='input-box'>
                                        <CgPassword />
                                        <input type='password' 
                                               name='password' 
                                               id='password' 
                                               value={password}
                                               onChange={(e) => setPassword(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='forgetAndSignIn'>
                                        <span><a href='#'>Forgot Password?</a></span>
                                        <button onClick={handleSubmit}>Sign In</button>
                                </div>
                                <div className='forSignUp'>
                                    <p>Don't have an account? <Link to="/">Sign Up!</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
  )
}
