import React, { useCallback } from 'react'

import { Outlet, Link } from 'react-router-dom'
import styled from 'styled-components';
import { signOutUser } from '../assets/firebase/firebase';

import {ReactComponent as Logo} from "../assets/crown.svg"
import CartIcon from './cart/CartIcon';
import CartDropDown from './cart/CartDropDown';

import { setOpen } from '../assets/redux/cart/cart-action'
import { useDispatch, useSelector } from 'react-redux';
import CookieConsent from './CookieConsent';
import { openSelector } from '../assets/redux/cart/cart-selector';

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

  const user = useSelector(state => state.user.user)
  const open = useSelector(openSelector);
  const dispatch = useDispatch();

  const dropDorwnHandler = useCallback(() => {
    open && dispatch(setOpen(!open));
  }, [open]);

  const signOutUserHandler = async () => {
    await signOutUser();
  }

  return (
    <section onClick={dropDorwnHandler}>
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
              <CartIcon />  
            </div>
            <CartDropDown />
        </Nav>
        <CookieConsent/>
        <Outlet />
    </section>
  )
}

export default Navigation