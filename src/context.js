import React, { createContext, useContext, useEffect, useState } from "react";

const url = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

const CategoriesUrl = "https://www.themealdb.com/api/json/v1/1/categories.php";

const byCategoryUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?c=";

const byAreaUrl = "https://www.themealdb.com/api/json/v1/1/filter.php?a=";

const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [byCategoryLoading, setByCategoryLoading] = useState(false);
  const [byAreaLoading, setByAreaLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [categories, setCategories] = useState([]);
  const [categoryValue, setCategoryValue] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [areaValue, setAreaValue] = useState("");
  const [selectedArea, setSelectedArea] = useState([]);
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isOpenAreas, setIsOpenAreas] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);

  const fetchMeals = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(url + searchValue);
      const data = await response.json();
      setMeals(data.meals);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await fetch(CategoriesUrl);
      const data = await response.json();
      const { categories } = data;
      setCategories(categories);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchByCategory = async (value) => {
    setByCategoryLoading(true);

    try {
      const response = await fetch(byCategoryUrl + value);
      const data = await response.json();
      setSelectedCategory(data.meals);

      setByCategoryLoading(false);
    } catch (error) {
      console.log(error.message);
      setByCategoryLoading(false);
    }
  };

  const fetchByArea = async (value) => {
    setByAreaLoading(true);
    try {
      const response = await fetch(byAreaUrl + value);
      const data = await response.json();
      setSelectedArea(data.meals);

      setByAreaLoading(false);
    } catch (error) {
      console.log(error.message);
      setByAreaLoading(false);
    }
  };

  const closeSection = (section) => {
    if (section === "categories") {
      setIsOpenCategory(false);
      setSelectedCategory([]);
    }
    if (section === "areas") {
      setIsOpenAreas(false);
      setSelectedArea([]);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    fetchByCategory(categoryValue);
  }, [categoryValue]);

  useEffect(() => {
    fetchByArea(areaValue);
  }, [areaValue]);

  return (
    <AppContext.Provider
      value={{
        meals,
        byCategoryLoading,
        categories,
        searchValue,
        selectedCategory,
        setCategoryValue,
        setSearchValue,
        setAreaValue,
        selectedArea,
        byAreaLoading,
        fetchMeals,
        isOpenCategory,
        setIsOpenCategory,
        closeSection,
        setIsOpenAreas,
        isOpenAreas,
        openMobile,
        setOpenMobile,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
