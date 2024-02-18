import React, { useState,useEffect } from 'react'
import './login.css'
import vec from './vec.jpeg'
import study1 from './study1.jpg'
import study2 from './study2.jpg'
import study3 from './study3.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import axios from 'axios'

function Login({onClick}) {
  const [username, setuserName] = useState('');
  const [number, setNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const errors = {};
    if (!password.trim()) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters long';
    }
    return errors;
  };
  const handleSubmit = async (e) => {
    const formErrors=validateForm();
    e.preventDefault();
    if (Object.keys(formErrors).length === 0) {
    try {
      await axios.post('/api/register', { username,number,password });
    
    } catch (error) {
      console.log("Try Again...")
    }
}
    else{
        setErrors(formErrors);
    }
  };
    const [isDayMode, setIsDayMode] = useState(true);
    const toggleMode = () => {
      const newMode = !isDayMode;
      setIsDayMode(newMode);
      localStorage.setItem('isDayMode',JSON.stringify(newMode));
    };

    useEffect(() => {
        const storedMode=localStorage.getItem('isDayMode');
        if(storedMode !== null){
            setIsDayMode(JSON.parse(storedMode))
        }
    },[]);

    useEffect(() => {
        AOS.init({ duration: 2000 });
      }, []);
      
    return(
         
      <div className='a0 d-flex'>
      <div className='b '>
          <img src={vec} className='d' data-aos="fade-right" />
  
          <div data-aos="fade-right" id="carouselExample" className="e carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div className="e carousel-inner">
                  <div className="e carousel-item active">
                      <img src={study1} className="e d-block w-100" alt="..." />
                  </div>
                  <div className="e carousel-item">
                      <img src={study2} className="e d-block w-100" alt="..." />
                  </div>
                  <div className="e carousel-item">
                      <img src={study3} className="e d-block w-100" alt="..." />
                  </div>
              </div>
              <button className="e carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                  <span className="e carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="e visually-hidden">Previous</span>
              </button>
              <button className="e carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                  <span className="e carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="e visually-hidden">Next</span>
              </button>
          </div>
          <h3 className='f' data-aos="fade-left">“TO EDUCATE THE STUDENT COMMUNITY BOTH BY THEORY AND PRACTICE TO FIT IN WITH SOCIETY AND TO CONQUER TOMORROW’S TECHNOLOGY AT GLOBAL LEVEL WITH HUMAN VALUES THROUGH OUR DEDICATED TEAM.”</h3>
      </div>
  
      <div className='c c2 d-flex ' data-aos="zoom-out" style={{  backgroundColor: isDayMode ? '#f5f5f5' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>
      <button style={{color: isDayMode ? 'white' : '#000000', color: isDayMode ? '#000000' : '#ffffff',backgroundColor: isDayMode ? ' transparent' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }} className='button2 justify-content-between align-items-center' data-aos="zoom-in" onClick={toggleMode}>{isDayMode ? (
    <i className='fa fa-sun'></i> ) : (<i className='fa fa-moon' />  )}</button>
          <button className='button3' style={{color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff',backgroundColor: isDayMode ? '#f5f5f5' : '#000000' }}  onClick={onClick} ><i className='fa fa-arrow-left'></i> </button>
          <img src={vec} className='d0' />
          <div className='c1' data-aos="zoom-in">
              <h3 className='f1' style={{color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>Welcome !</h3>
              <p className='f1' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>Sign in to your Account</p>
              <form className='d-flex flex-column' action={handleSubmit}>
                  <label className='f2' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>UserName</label>
                  <div className='d-flex align-items-center'>
                      <i className='fa1 fa fa-user' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}></i>
                      <input className='in1'  style={{ backgroundColor: isDayMode ? 'white' : 'black',color: isDayMode ? 'black' : 'white',borderColor: isDayMode ? 'black' : 'white'}} type='email' onChange={(e) => setuserName(e.target.value)} value={username} placeholder='Enter UserName' required/>
                  </div>
                  <label className='f1' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>Register Number</label>
                  <div className='d-flex align-items-center'>
                      <i className='fa3 fa fa-id-card' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}></i>
                      <input type='number'  style={{ backgroundColor: isDayMode ? 'white' : 'black',color: isDayMode ? 'black' : 'white',borderColor: isDayMode ? 'black' : 'white'}} className='in' onChange={(e) => setNumber(e.target.value)} value={number} placeholder='Enter Register Number' required/>
                  </div>
                  <label className='f1' value={password} style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}>Password</label>
                  <div className='d-flex align-items-center'>
                      <i className='fa1 fa fa-lock' style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }}></i>
                      <input style={{ backgroundColor: isDayMode ? 'white' : 'black',color: isDayMode ? 'black' : 'white',borderColor: isDayMode ? 'black' : 'white'}} type='password'className='in1' onChange={(e) => setPassword(e.target.value)} placeholder='Enter Password'/>
                      {errors.password && <span>*{errors.password}</span>}
                  </div>
                  <button className='button1' type='submit'>Login</button>
                  <div style={{ display: 'flex', flexDirection: 'row' }} className='g'>
                      <a href='https://www.instagram.com/vec_chennai?igsh=bW4zdHJ5NWplOTFx'><i style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }} className='h fa fa-brands fa-instagram'></i></a>
                      <a href=''><i style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }} className='h fa fa-brands fa-facebook'></i></a>
                      <a href=''><i style={{ color: isDayMode ? ' rgb(108, 0, 214)' : '#000000', color: isDayMode ? '#000000' : '#ffffff' }} className='h fa fa-brands fa-twitter'></i></a>
                  </div>
              </form>
          </div>
      </div>
  </div>
    );
}
export { Login };