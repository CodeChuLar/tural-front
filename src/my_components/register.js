import React, { useState } from 'react'
import { TfiEmail } from "react-icons/tfi";
import { CgPassword } from "react-icons/cg";
import { FaUserCircle } from "react-icons/fa";
import { SiNamecheap } from "react-icons/si";
import { HiIdentification } from "react-icons/hi2";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
export default function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [voen, setVoen] = useState('');
    const [companyName, setcompanyName] = useState('');
    const [agentName, setAgentName] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate()


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (typeof email !== "string" && email.length === 0 || password !== "string" && password.length === 0 || typeof username !== "string" && username.length === 0 || typeof voen !== "string" && voen.length === 0 || typeof companyName !== "string" && companyName.length === 0 || typeof agentName!== "string" && agentName.length === 0) {
            setError('Please fill in all fields');
            return;
        }
        
        if (!validateEmail(email)) {
            setError('Invalid email format');
            return;
        }

        if (password.length < 7) {
            setError('Password must be at least 7 characters long');
            return;
        }
        try {
            const response = await axios.post('https://3af9-82-194-17-140.ngrok-free.app/api/auth/register', {
                email: email,
                password: password,
                username: username,
                voen: voen,
                agentName: agentName,
                companyName:companyName
            });
            setEmail("");
            setPassword("");
            setAgentName("");
            setUsername("");
            setVoen("");
            setcompanyName("");
            navigate("/registeredOk")
            console.log('Response:', response.data);
        } catch (error) {
            setError("Serverde xəta baş verdi!")
            console.error('Error:', error);
        }

    };

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };
  return (
    <>
        <div id='loginPage'>
                <div className='background'></div>
                <div className='login-container'>
                    <div className='title'>
                        <h2>TRAVEL AGENCY SIGN UP FORM</h2>
                    </div>
                    <div className='form-container'>
                        <div className='form-img'>
                            <img src='./img/login-bg2.jpg'/>
                        </div>
                        <div className='form'>
                            <form>
                                <div className='form-title'>
                                    <h3>Registration</h3>
                                </div>
                                <div className='registerError'>{error}</div>
                                <div className='input-fluid'>
                                    <label htmlFor='name'>Name</label>
                                    <div className='input-box'>
                                        <SiNamecheap />
                                        <input type='text' 
                                               name='name' 
                                               id='name' 
                                               value={agentName}
                                               onChange={(e) => setAgentName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className='input-fluid'>
                                    <label htmlFor='username'>Username</label>
                                    <div className='input-box'>
                                        <FaUserCircle />
                                        <input type='text' 
                                               name='username' 
                                               id='username' 
                                               value={username}
                                               onChange={(e) => setUsername(e.target.value)}/>
                                    </div>
                                </div>
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
                                    <label htmlFor='voen'>Voen</label>
                                    <div className='input-box'>
                                        <HiIdentification />
                                        <input type='text' 
                                               name='voen' 
                                               id='voen' 
                                               value={voen}
                                               onChange={(e) => setVoen(e.target.value)}/>
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
                                        <button onClick={handleSubmit}>Sign Up</button>
                                </div>
                                <div className='forSignUp'>
                                    <p>Do you have an account? <Link to="/login">Sign In</Link></p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}
