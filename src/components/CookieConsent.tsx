import React from 'react'
import Btn from './tools/Btn'
import {ReactComponent as Logo} from "../assets/crown.svg"

import styled from 'styled-components'

import { useDispatch, useSelector } from 'react-redux'
import { declineCookies, setAllCookies, setNecessaryCookies } from '../assets/redux/cookies/cookie-action'
import { answered } from '../assets/redux/cookies/cookie-selector'

const CookieWrap = styled.section`

  position: absolute;
  bottom: 0;
  left: 0;

  display: flex;
  width: 100vw;
  height: 80px;
  background-color: white;
  *:not(button) {
    color: black;
    font-size: 12px;
  }
`

const CookieConsent = () => {
  // REDUX INIT
  const dispatch = useDispatch();

  const clickNes = () => dispatch(setNecessaryCookies())
  const clickAll = () => dispatch(setAllCookies())
  const decline = () => dispatch(declineCookies())

  const isAnswered = useSelector(answered)
  
  return (
    <>{!isAnswered && 
      <CookieWrap id="cookiesPopUp">
        <div id="policy-block">
          <Logo />
          <div id="policy-holder">
            <p id="policy-text">
              We use first-party and third-party cookies for analytical purposes
              and to show you advertising related to your preferences, based on
              your browsing habits and profile. You can configure or block
              cookies by clicking on “Cookies settings”. You can also accept all
              cookies by clicking on “Accept all cookies”. For more information,
              please consult our
              <a
                href="https://static.zara.net/static/pdfs/ZARA/cookies-policy/cookies-policy-en_US-20201028.pdf"
                aria-label="More information about your privacy"
              >
                Cookie Policy
              </a>
            </p>
          </div>
        </div>
        <div id="btn-block">
          <Btn id="set-btn" onClick={clickNes}>Necessary Cookies</Btn>
          <Btn id="accept-btn" onClick={clickAll}>Accept All Cookies</Btn>
        </div>
        <div id="close" onClick={decline}>X</div>
      </CookieWrap>
    }</>
  );
}

export default CookieConsent