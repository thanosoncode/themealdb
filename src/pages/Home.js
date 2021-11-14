import React from "react";
import SearchForm from "../components/SearchForm";
import Welcome from "../components/Welcome";
import Categories from "../components/Categories";
import Areas from "../components/Areas";
import Meals from "../components/Meals";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="content">
        <Welcome />
        <SearchForm />
        <Meals />
        <Categories />
        <Areas />
        <Footer />
      </div>
    </>
  );
};

export default Home;
