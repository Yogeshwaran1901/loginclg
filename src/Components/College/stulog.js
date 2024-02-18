import React, { useState } from 'react';
import './stulog.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import pic1 from './pic2.png'
import pic2 from './pic1.png'
import { faUser, faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faGoogle, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export class Login1 extends React.Component {
  handleSignUpClick = () => {
    this.container.classList.add("sign-up-mode");
  };

  handleSignInClick = () => {
    this.container.classList.remove("sign-up-mode");
  };

  render() {
    return (
      <div className="container" ref={c => (this.container = c)}>
        <div className="forms-container">
          <div className="signin-signup">
            <form action="#" className="sign-in-form">
              <h2 className="title">Student Login</h2>
              <div className="input-field">
                <div className="icon">
                <FontAwesomeIcon icon={faUser} />
                </div>
                
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faLock} />
                </div>
               
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" value="Login" className="btn solid" />
             <a href='#' onClick={this.props.onClick}>Are you want to SignUp?</a>
              <p className="social-text">Or Sign in with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </form>
            <form action="#" className="sign-up-form">
              <h2 className="title">Teachers Login</h2>
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faUser} />
                </div>
                
                <input type="text" placeholder="Username" />
              </div>
             
              <div className="input-field">
              <div className="icon">
              <FontAwesomeIcon icon={faLock} />
                </div>
                
                <input type="password" placeholder="Password" />
              </div>
              <input type="submit" className="btn" value="Login" />
              <a href='#' onClick={this.props.onClick}>Are you want to SignUp?</a>
              <p className="social-text">Or Sign up with social platforms</p>
              <div className="social-media">
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="#" className="social-icon">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="content">
              <h3>New here ?</h3>
              <p>
                HELLO!!!
              </p>
              <button className="btn transparent" onClick={this.handleSignUpClick}>
                Teachers Login
              </button>
            </div>
            <img src={pic1} className="image" alt=".." />
          </div>
          <div className="panel right-panel">
            <div className="content">
              <h3>One of us ?</h3>
              <p>
                HELLO!!
              </p>
              <button className="btn transparent" onClick={this.handleSignInClick}>
                Sign in
              </button>
            </div>
            <img src={pic2} className="image" alt="..." />
          </div>
        </div>
      </div>
    );
  }
}

