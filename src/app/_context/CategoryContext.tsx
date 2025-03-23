"use client";
import { getCategories } from "@/util/getCategories";
import { getFoods } from "@/util/getFoods";
import { categoryType, Foods } from "@/util/types";
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type CategoryContextType = {
  categories: categoryType[] | undefined;
  setCategories: (_categories: categoryType[]) => void;
};

export const CategoriesContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

export const useCategories = () => {
  return useContext(CategoriesContext);
};

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<categoryType[]>();

  useEffect(() => {
    const getAllCategories = async () => {
      const allCategories = await getCategories();
      setCategories(allCategories.allCategories);
    };
    getAllCategories();
  }, []);

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  );
};
