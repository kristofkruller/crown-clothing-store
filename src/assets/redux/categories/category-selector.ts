import { createSelector } from "reselect"; //memoization
import { InitState } from "./category-reducer"
import { CatSelectorMapType } from "./category-type";

const categoriesReducer = (state): InitState => state.categories;

const categoriesVal = createSelector(
  [categoriesReducer],
  (catValue) => catValue.categoriesMap
);

export const catSelectorMap = createSelector( 
  [categoriesVal],
  (val): CatSelectorMapType => val.reduce((acc, category) => {
    const { title, items } = category;

    acc[title.toLowerCase()] = items;
    return acc;
  }, {} as CatSelectorMapType)
)

export const categoriesLoading = createSelector(
  [categoriesReducer],
  val => val.isLoading 
)