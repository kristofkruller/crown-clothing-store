import { Action, actionHandler, ActionWithPayload, withMatcher } from "../action-handler";
import { CAT_ACTION_TYPES, Category } from "./category-type";

export type StartFetchCategories = Action<CAT_ACTION_TYPES.FETCH_CATEGORY_START>;
export type ResolveFetchCategories = ActionWithPayload<CAT_ACTION_TYPES.FETCH_CATEGORY_RESOLVE, Category[]>;
export type RejectFetchCategories = ActionWithPayload<CAT_ACTION_TYPES.FETCH_CATEGORY_REJECT, Error>;

export const startFetchCategories = withMatcher((): StartFetchCategories => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_START));

export const resolveFetchCategories = withMatcher((catArray: Category[]): ResolveFetchCategories => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_RESOLVE, catArray));

export const rejectFetchCategories = withMatcher((error: Error): RejectFetchCategories => actionHandler(CAT_ACTION_TYPES.FETCH_CATEGORY_REJECT, error));
