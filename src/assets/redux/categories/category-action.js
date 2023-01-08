import { getCatAndDocs } from "../../firebase/firebase";
import { actionHandler } from "../action-handler";
import { CAT_ACTION_TYPES } from "./category-type";

export const startFetchCategories = () => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_START);
export const resolveFetchCategories = catArray => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_RESOLVE, catArray);
export const rejectFetchCategories = error => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_REJECT, error);

export const fetchCategoryAsync = () => {

  return async (dispatch) => {

    dispatch(startFetchCategories());

    try {

      const data = await getCatAndDocs();

      dispatch(resolveFetchCategories(data));

    } catch (error) {

      dispatch(rejectFetchCategories(error));

    }

  }
}