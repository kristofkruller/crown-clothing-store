import React from 'react'
import styled from 'styled-components'
import {ReactComponent as Logo} from "../assets/crown.svg"
import Btn from './tools/Btn'


const CookieConsent = () => {

  return (
      <div>
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
          <Btn id="set-btn">Cookies Settings</Btn>
          <Btn id="accept-btn">Accept All Cookies</Btn>
        </div>
      </div>
  );
}

export default CookieConsent