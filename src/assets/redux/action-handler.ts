import { AnyAction } from "redux";

type Matchabe<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>["type"];
  match(action: AnyAction): action is ReturnType<AC>;
}

export function withMatcher<AC extends () => AnyAction & { type: string }> (actionCreator: AC): Matchabe<AC>; 
export function withMatcher<AC extends (...args: any[]) => AnyAction & { type: string }> (actionCreator: AC): Matchabe<AC>; 

export function withMatcher(actionCreator: Function) {

} 


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

