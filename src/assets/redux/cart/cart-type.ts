import { CatArrayItem, Category } from "../categories/category-type"

export enum CART_ACTION_TYPES {
  SET_OPEN = "SET_OPEN",
  SET_CART_ITEMS = "SET_CART_ITEMS"
}

export type CartItems = {
  quantity: number,
  totalVal: number
} & CatArrayItem
