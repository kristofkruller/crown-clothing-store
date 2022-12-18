import React from 'react'
import { signInWithGooglePopup, authDocument } from '../assets/firebase/firebase'
import SignUp from './SignUp'

const SignIn = () => {
  const googlePopUp = async() => {
    //destruct response into user
    const { user } = await signInWithGooglePopup();
    //call db doc setter
    authDocument(user);
  }

  return (
    <>
        <button onClick={googlePopUp}>SignIn</button>
        <SignUp />
    </>
  )
}

export default SignIn