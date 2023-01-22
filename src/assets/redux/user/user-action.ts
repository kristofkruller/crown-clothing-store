import { actionHandler, ActionWithPayload, Action, withMatcher } from "../action-handler";
import { USER_ACTION_TYPES, UserType } from "./user-type";
import { AdditionalInfo } from "../../firebase/firebase";

//TYPES

export type UserAction = ActionWithPayload<USER_ACTION_TYPES.SET_USER, UserType>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type SignUpStart = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;

export type EmailSignInStart = ActionWithPayload<
  USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;

export type SignInSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_SUCCESS,
  UserType
>;

export type SignInFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_IN_FAILED,
  Error
>;

export type SignUpSuccess = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_SUCCESS,
  { user: UserType; additionalDetails: AdditionalInfo }
>;

export type SignUpFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_UP_FAILED,
  Error
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailed = ActionWithPayload<
  USER_ACTION_TYPES.SIGN_OUT_FAILED,
  Error
>;

//ACTIONS

export const setUser = withMatcher((user: UserType): UserAction => actionHandler(USER_ACTION_TYPES.SET_USER, user));export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export const checkUserSession = withMatcher(
  (): CheckUserSession => actionHandler(USER_ACTION_TYPES.CHECK_USER_SESSION)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => actionHandler(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    actionHandler(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password })
);

export const signInSuccess = withMatcher(
  (user: UserType & { id: string }): SignInSuccess =>
    actionHandler(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user)
);

export const signInFailed = withMatcher(
  (error: Error): SignInFailed =>
    actionHandler(USER_ACTION_TYPES.SIGN_IN_FAILED, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    actionHandler(USER_ACTION_TYPES.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: UserType, additionalDetails: AdditionalInfo): SignUpSuccess =>
    actionHandler(USER_ACTION_TYPES.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher(
  (error: Error): SignUpFailed =>
    actionHandler(USER_ACTION_TYPES.SIGN_UP_FAILED, error)
);

export const signOutStart = withMatcher(
  (): SignOutStart => actionHandler(USER_ACTION_TYPES.SIGN_OUT_START)
);

export const signOutSuccess = withMatcher(
  (): SignOutSuccess => actionHandler(USER_ACTION_TYPES.SIGN_OUT_SUCCESS)
);

export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    actionHandler(USER_ACTION_TYPES.SIGN_OUT_FAILED, error)
);