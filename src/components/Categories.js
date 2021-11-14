import React from "react";
import { useGlobalContext } from "../context";
import SelectedCategory from "./SelectedCategory";
import CategoryLoading from "./CategoryLoading";
import { FaTimes } from "react-icons/fa";

const Categories = () => {
  const {
    byCategoryLoading,
    categories,
    setCategoryValue,
    setIsOpenCategory,
    isOpenCategory,
    closeSection,
  } = useGlobalContext();

  if (!categories) {
    return <CategoryLoading />;
  }

  return (
    <>
      <h4 className="section-title">Browse Categories</h4>
      <div className="categories">
        {categories.map((cat, index) => {
          return (
            <div
              key={index}
              className="categories-item"
              onClick={() => {
                setCategoryValue(cat.strCategory);
                setIsOpenCategory(true);
              }}
            >
              {cat.strCategory}
            </div>
          );
        })}
        {isOpenCategory && (
          <button
            className="close-section-btn"
            onClick={() => closeSection("categories")}
          >
            <span>
              <FaTimes />
            </span>
          </button>
        )}
      </div>
      {byCategoryLoading ? <CategoryLoading /> : <SelectedCategory />}
      <div className="horizontal-line"></div>
    </>
  );
};

export default Categories;
