import React, { useState } from "react";

import styled from "styled-components";
import {
  signInWithEmailPass,
  signInWithGooglePopup,
} from "../../assets/firebase/firebase";

import Btn from "../tools/Btn";
import InputForm from "../tools/InputForm";

const SignInWrap = styled.section`
  display: flex;
  flex-direction: column;
  width: 35%;
`;
const ButtonWrap = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;
const fieldTemplate = {
  email: "",
  password: "",
};

const SignIn = () => {
  const [fields, setFields] = useState(fieldTemplate);
  const { email, password } = fields;

  const resetFields = () => setFields(fieldTemplate);

  const googleSignIn = async () => {
    await signInWithGooglePopup();
  };

  const submitChange = async (event) => {
    event.preventDefault();

    try {
      await signInWithEmailPass(email, password);

      resetFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.error(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  return (
    <SignInWrap>
      <h2>I have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={submitChange}>
        <InputForm
          label="Email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label="Password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />
        <ButtonWrap>
          {/* submit btn auto connects with onsubmit func */}
          <Btn buttonType="default" type="submit">
            Sign in
          </Btn>
          <Btn buttonType="google" type="button" onClick={googleSignIn}>
            Sign in with Google
          </Btn>
        </ButtonWrap>
      </form>
    </SignInWrap>
  );
};

export default SignIn;
