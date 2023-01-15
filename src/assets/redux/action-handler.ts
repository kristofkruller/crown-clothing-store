import { AnyAction } from "redux";

export type ActionWithPayload<T, P> = {
  type: T;
  payload: P;
}

export type Action<T> = {
  type: T;
}

export function actionHandler<T extends string, P> (type: T, payload: P): ActionWithPayload<T, P>;
export function actionHandler<T extends string> (type: T, payload: void): Action<T>;

// export const actionHandler = (type, payload) => ({ type, payload });
export function actionHandler<T extends string, P> (type:T, payload:P) {
  return { type, payload }
}

