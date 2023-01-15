export enum USER_ACTION_TYPES {
  SET_USER= "SET_USER"
}

export type UserType = {
  createdAt: Date; 
  displayName: string;
  email: string;
}