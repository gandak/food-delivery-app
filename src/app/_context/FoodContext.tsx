"use client";
import { getFoods } from "@/util/getFoods";
import { Foods } from "@/util/types";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type FoodContextType = {
  foods: Foods[] | undefined;
  setFoods: (_food: Foods[]) => void;
};

export const FoodContext = createContext<FoodContextType>(
  {} as FoodContextType
);

export const useFoods = () => {
  return useContext(FoodContext);
};

export const FoodProvider = ({ children }: { children: ReactNode }) => {
  const [foods, setFoods] = useState<Foods[]>();

  useEffect(() => {
    const getAllFoods = async () => {
      const allFood = await getFoods();
      setFoods(allFood.allFood);
    };
    getAllFoods();
  }, []);

  return (
    <FoodContext.Provider value={{ foods, setFoods }}>
      {children}
    </FoodContext.Provider>
  );
};
