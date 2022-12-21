import React, {useContext} from 'react'
import {UserContext} from "../context/UserContext";

import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components';
import {ReactComponent as Logo} from "../assets/crown.svg"
import { signOutUser } from '../assets/firebase/firebase';

const Nav = styled.section`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
  
    .logo-container {
      height: 100%;
      width: 70px;
      padding: 25px;
    }
  
    .nav-links-container {
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
  
      .nav-link {
        padding: 10px 15px;
        cursor: pointer;
      }
    }
`

const Navigation = () => {

  const { user } = useContext(UserContext);

  const signOutUserHandler = async () => {
    await signOutUser();
  }

  return (
    <>
        <Nav className='navigation'>
            <Link className='logo-container' to='/'>
            <Logo className='logo' />
            </Link>
            <div className='nav-links-container'>
                <Link className='nav-link' to='/shop'>
                    SHOP
                </Link>
                {user ? 
                  <span className='nav-link' onClick={signOutUserHandler}> SIGN OUT</span> 
                  :
                  <Link className='nav-link' to='/auth'>
                      SIGN IN
                  </Link>
                }
                
            </div>
        </Nav>
        <Outlet />
    </>
  )
}

export default Navigation