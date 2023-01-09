import React, { useState } from "react";
import { authWithEmailPass, authDocument } from "../../assets/firebase/firebase";
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

  const resetFields = () => setFields(fieldTemplate);

  const submitChange = async (event) => {
    event.preventDefault();

    if (password !== confirm) {
      alert("Your passwords did not match!");
      return;
    }
    try {
      const { user } = await authWithEmailPass(email, password);
      await authDocument(user, { displayName });
      resetFields();
    } catch (error) {
      error.code === "auth/email-already-in-use"
        ? alert("Email already in use")
        : console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFields({ ...fields, [name]: value });
  };

  return (
    <SignUpWrap>
      <h2>I do not have an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={submitChange}>
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
