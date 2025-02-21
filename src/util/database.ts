type Category = {
  id: number;
  name: string;
};

export type Foods = {
  id: number;
  name: string;
  price: number;
  description: string;
  imageURL: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: "Appetizer",
  },
  {
    id: 2,
    name: "Salads",
  },
  {
    id: 3,
    name: "Pizzas",
  },
  {
    id: 4,
    name: "Lunch favorites",
  },
  {
    id: 5,
    name: "Main dishes",
  },
  {
    id: 6,
    name: "Fish & Sea foods",
  },
  {
    id: 7,
    name: "Brunch",
  },
  {
    id: 8,
    name: "Desserts",
  },
  {
    id: 9,
    name: "Beverages",
  },
  {
    id: 10,
    name: "Fast food",
  },
];

export const foods: Foods[] = [
  {
    id: 1,
    name: "Finder food",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101346/wxl0sbuudqv3p9jlcsel.png",
  },
  {
    id: 2,
    name: "Cranberry Brie Bites",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101370/hemniqskfkxctytvwf8r.png",
  },
  {
    id: 3,
    name: "Sunshine stackers",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101427/zgadohsirvaztvc8yc2a.png",
  },
  {
    id: 4,
    name: "Brie Crostini Appetizer",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101474/hxxdd0j3ngd1mxsanfny.png",
  },
  {
    id: 5,
    name: "Sunshine",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101503/bpfmtsgjxnpajzap1sm9.png",
  },
  {
    id: 6,
    name: "Grilled chicken",
    price: 12.99,
    description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar",
    imageURL:
      "https://res.cloudinary.com/dagcnqvlx/image/upload/v1740101528/estc23vl3czoq9q425fx.png",
  },
];
