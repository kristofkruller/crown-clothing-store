import React from 'react'
import { signInWithGooglePopup, authDocument } from '../assets/firebase/firebase'

const SignIn = () => {
  const googlePopUp = async() => {
    //destruct response into user
    const {user} = await signInWithGooglePopup();
    //call db doc setter
    authDocument(user);
  }

  return (
    <button onClick={googlePopUp}>SignIn</button>
  )
}

export default SignIn