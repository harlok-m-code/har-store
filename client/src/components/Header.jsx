import React, { useEffect } from 'react';
import './css/header.css'
import { Link } from 'react-router-dom';
import { useAuth } from '../hook/authHook'

const Header = () => {

  const { ready, logout } = useAuth();
  const isReady = ready? false: true;

  return <div>
          <nav>
            <div className="nav-wrapper color blue">
            <Link to="/" className="brand-logo center">Shop</Link>
            {isReady&&
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to="/login">Sign in</Link></li>
                    <li><Link to="/registration">Sign up</Link></li>
                </ul>
            }
                {ready&&
                    <button className='btn btn-logout' onClick={logout}>Log out</button> 
                }
                     
            </div>
      </nav>
  </div>;
};

export default Header;
