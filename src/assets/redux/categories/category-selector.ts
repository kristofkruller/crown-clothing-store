import { createSelector } from "reselect"; //memoization
import { RootState } from "../store";
import { InitState } from "./category-reducer"
import { CatSelectorMapType } from "./category-type";

const categoriesReducer = (state: RootState): InitState => state.categories

const categoriesVal = createSelector(
  [categoriesReducer],
  (catValue) => catValue.categoriesMap
);

export const catSelectorMap = createSelector( 
  [categoriesVal],
  (values): CatSelectorMapType => values.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CatSelectorMapType)
)

export const categoriesLoading = createSelector(
  [categoriesReducer],
  val => val.isLoading 
)