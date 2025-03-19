export type categoryType = {
  categoryName: string;
  createdAt: Date;
  updatedAy: Date;
  __v: number;
  _id: string;
};

export type Foods = {
  _id: string;
  foodName: string;
  price: number;
  ingredients: string;
  image: string;
  category: {
    categoyName: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
    _id: string;
  };
  updatedAt: Date;
  createdAt: Date;
  __v: number;
};
