import React, { ChangeEvent, FC, FormEvent, useState } from "react";

import styled from "styled-components";

import { useDispatch, useSelector } from "react-redux";
import { useCookies } from 'react-cookie';
import { cookieType } from "../../assets/redux/cookies/cookie-selector";

import Btn from "../tools/Btn";
import InputForm from "./InputForm";
import { emailSignInStart, googleSignInStart } from "../../assets/redux/user/user-action";

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

const SignIn: FC = () => {

  const dispatch = useDispatch();

  const [fields, setFields] = useState(fieldTemplate);
  const { email, password } = fields;

  const typeOfAnswer = useSelector(cookieType);

  const [userCookie, setUserCookie, removeUserCookie] = useCookies([]);
  const today = new Date();
  const expires = new Date();

  expires.setFullYear(expires.getFullYear() + 10);

  const setCookiesToBrowser = () => {
    typeOfAnswer === "all" && setUserCookie(`signIn-${today.getMilliseconds()}` as never, `with:${email}__logged-in-at:${today.toISOString()}`, {
      path: "/auth",
      expires: expires
    });
  } 

  const resetFields = () => setFields(fieldTemplate);

  const googleSignIn = async () => {
    dispatch(googleSignInStart());
  };

  const submitChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {

      dispatch(emailSignInStart(email, password));
      setCookiesToBrowser();
      resetFields();

    } catch (error: any //any because FireBaseError is not exported
    ) {
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

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
