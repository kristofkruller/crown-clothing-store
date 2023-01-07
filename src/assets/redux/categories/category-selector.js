import { createSelector } from "reselect"; //memoization

const categoriesReducer = state => state.categories;

const categoriesVal = createSelector(
  [categoriesReducer],
  (catValue) => catValue.categoriesMap
);

export const catSelectorMap = createSelector( 
  [categoriesVal],
  val => val.reduce((acc, category) => {
    const { title, items } = category;

    acc[title.toLowerCase()] = items;
    return acc;
  }, {})
)

export const categoriesLoading = createSelector(
  [categoriesReducer],
  val => val.isLoading 
)