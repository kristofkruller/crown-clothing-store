import { CAT_ACTION_TYPES } from "./category-type";

export const initialCatState = {
  categoriesMap: [],
  isLoading: false,
  error: null
}

export const catReducer = (state = initialCatState, action = {}) => {

  const { type, payload } = action;

  switch ( type ) {
    case CAT_ACTION_TYPES.FETCH_CATEGORY_START:
      return {
        ...state,
        isLoading: true,
      };
    case CAT_ACTION_TYPES.FETCH_CATEGORY_RESOLVE:
      return {
        ...state,
        isLoading: false,
        categoriesMap: payload,
      };
    case CAT_ACTION_TYPES.FETCH_CATEGORY_REJECT:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }

}