import { CAT_ACTION_TYPES } from "./category-type";

export const initialCatState = {
  categoriesMap: {},
}

export const catReducer = (state = initialCatState, action = {}) => {

  const { type, payload } = action;

  switch ( type ) {
    case CAT_ACTION_TYPES.SET_CATEGORY_MAP:
      return {
        ...state,
        categoriesMap: payload
      };

    default:
      return state;
  }

}