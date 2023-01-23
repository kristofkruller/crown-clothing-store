export enum USER_ACTION_TYPES {
  SET_USER = "user/SET_USER",
  CHECK_USER_SESSION = "user/CHECK_USER_SESSION",
};

export type UserType = {
  createdAt: Date; 
  displayName: string;
  email: string;
}