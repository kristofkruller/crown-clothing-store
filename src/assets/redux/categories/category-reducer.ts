import { AnyAction } from "redux";

import { Category } from "./category-type";
import { rejectFetchCategories, resolveFetchCategories, startFetchCategories } from "./category-action"

export type InitState = {
  readonly categoriesMap: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
}

export const initialCatState: InitState = {
  categoriesMap: [],
  isLoading: false,
  error: null
}

export const catReducer = (state = initialCatState, action = {} as AnyAction): InitState => {
  if (startFetchCategories.match(action)) return {
    ...state,
    isLoading: true
  }
  if (resolveFetchCategories.match(action)) return {
    ...state,
    isLoading: false,
    categoriesMap: action.payload
  }
  if (rejectFetchCategories.match(action)) return {
    ...state,
    isLoading: false,
    error: action.payload
  }

  return state;
}

  // switch ( action.type ) {
  //   case CAT_ACTION_TYPES.FETCH_CATEGORY_START:
  //     return {
  //       ...state,
  //       isLoading: true,
  //     };
  //   case CAT_ACTION_TYPES.FETCH_CATEGORY_RESOLVE:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       categoriesMap: action.payload,
  //     };
  //   case CAT_ACTION_TYPES.FETCH_CATEGORY_REJECT:
  //     return {
  //       ...state,
  //       isLoading: false,
  //       error: action.payload,
  //     };

  //   default:
  //     return state;