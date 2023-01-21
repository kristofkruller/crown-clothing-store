import React, { ChangeEvent, FC, FormEvent, useState } from "react";
import { authWithEmailPass, authDocument } from "../../assets/firebase/firebase";
import InputForm from "./InputForm";
import Btn from "../tools/Btn";
import styled from "styled-components";
import { FieldTempType } from "./SignIn";
import { AuthError, AuthErrorCodes } from "firebase/auth";

const SignUpWrap = styled.section`
    display: flex;
    flex-direction: column;
    width: 35%;

    h2 {
        margin: 10px 0;
    }
`

const fieldTemplate: FieldTempType = {
  displayName: "",
  email: "",
  password: "",
  confirm: "",
};

const SignUp: FC = () => {
  const [fields, setFields] = useState(fieldTemplate);
  const { displayName, email, password, confirm } = fields;

  const resetFields = () => setFields(fieldTemplate);

  const submitChange = async (event: FormEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (password !== confirm) {
      alert("Your passwords did not match!");
      return;
    }
    try {

      const getUser = await authWithEmailPass(email, password);
      const user = getUser?.user;
      if (user) {
        await authDocument(user, { displayName });
      } else {
          // handle the case where user is undefined or null
          console.error("User is not defined or null.");
      }
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
