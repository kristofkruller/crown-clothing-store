import React, { useState } from "react";
import { authWithEmailPass, authDocument } from "../assets/firebase/firebase";
import InputForm from "./InputForm";

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
    <>
      <h1>Sign up with your email and password</h1>

      <form onSubmit={submitChange}>
        <InputForm
          label="User Name"
          required
          type="text"
          onChange={handleChange}
          name="displayName"
          value={displayName}
        />

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

        <InputForm
          label="Confirm Password"
          required
          type="password"
          onChange={handleChange}
          name="confirm"
          value={confirm}
        />

        {/* submit btn auto connects with onsubmit func */}
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default SignUp;
