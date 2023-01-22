import React, { ChangeEvent, FormEvent, useState } from "react";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useDispatch } from "react-redux";

import { signUpStart } from "../../assets/redux/user/user-action";

import InputForm from "./InputForm";
import Btn from "../tools/Btn";
import styled from "styled-components";

const SignUpWrap = styled.section`
    display: flex;
    flex-direction: column;
    width: 35%;

    h2 {
        margin: 10px 0;
    }
`

const fieldTemplate = {
  displayName: "",
  email: "",
  password: "",
  confirm: "",
};

const SignUp = () => {
  const [fields, setFields] = useState(fieldTemplate);
  const { displayName, email, password, confirm } = fields;
  const dispatch = useDispatch();

  const resetFields = () => setFields(fieldTemplate);

  const submitChange = async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (password !== confirm) {
      alert("Your passwords did not match!");
      return;
    }
    
    try {

      dispatch(signUpStart(email, password, displayName))
      resetFields();
    
    } catch (error) {

      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        alert('Cannot create user, email already in use');
      } else {
        console.error('user creation encountered an error', error);
      }

    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  return (
    <SignUpWrap>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={async () => {
        try {
            await submitChange;
        } catch (error) {
            console.error(error);
        }
      }}>
        <InputForm
          label="User Name"
          autoComplete="username"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

        <InputForm
          label="Email"
          autoComplete="email"
          required
          type="email"
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label="Password"
          autoComplete="password"
          required
          type="password"
          onChange={handleChange}
          name="password"
          value={password}
        />

        <InputForm
          label="Confirm Password"
          autoComplete="confirm-password"
          required
          type="password"
          onChange={handleChange}
          name="confirm"
          value={confirm}
        />

        {/* submit btn auto connects with onsubmit func */}
        <Btn buttonType="default" type="submit">Sign Up</Btn>
      </form>
    </SignUpWrap>
  );
};

export default SignUp;
