export enum CAT_ACTION_TYPES {
  FETCH_CATEGORY_START= "FETCH_CATEGORY_START",
  FETCH_CATEGORY_RESOLVE= "FETCH_CATEGORY_RESOLVE",
  FETCH_CATEGORY_REJECT= "FETCH_CATEGORY_REJECT"
}

export type Category = {
  title: string;
  imageUrl: string;
  items: CatArrayItem[];
}

export type CatArrayItem = {
  id: number;
  imageUrl: string;
  name: string;
  price: number;
}

export type CatSelectorMapType = {
  [key: string]: CatArrayItem[];
}