import { actionHandler } from "../action-handler";
import { CAT_ACTION_TYPES } from "./category-type";

export const setCategoriesMap = cat => actionHandler(CAT_ACTION_TYPES.SET_CATEGORY_MAP, cat);