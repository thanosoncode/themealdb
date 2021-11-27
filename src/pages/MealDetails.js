import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const byIdUrl = "https:www.themealdb.com/api/json/v1/1/lookup.php?i=";

const MealDetails = () => {
  const [meal, setMeal] = useState([]);
  const params = useParams();
  const id = params.id;
  const [newId, setNewId] = useState(Number.parseInt(id));
  const [readMore, setReadMore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [recipe, setRecipe] = useState(null);

  console.log(newId);

  const makeRecipe = (meal) => {
    const ingredients = Object.entries(meal)
      .filter(
        (entry) => entry[0].startsWith("strIngredient") && entry[1] !== ""
      )
      .map((entry) => entry[1]);

    const measures = Object.entries(meal)
      .filter((entry) => entry[0].startsWith("strMeasure") && entry[1] !== " ")
      .map((entry) => entry[1]);

    let recipe = [];

    ingredients.forEach((ing, i) => {
      let array = [ing, measures[i]];
      recipe.push(array);
      return recipe;
    });
    return recipe;
  };

  useEffect(() => {
    const fetchMeal = async () => {
      const response = await fetch(byIdUrl + newId);
      const data = await response.text();
      console.log(data);
      // if (response.status >= 200 && response.status <= 299) {
      //   const data = await response.json();
      //   console.log(data);
      //   setMeal(data.meals[0]);

      //   setLoading(false);
      // } else {
      //   setLoading(false);
      //   throw new Error(response.statusText);
      // }
    };
    fetchMeal();
  }, []);

  useEffect(() => {
    if (meal) {
      setRecipe(makeRecipe(meal));
    }
  }, [meal]);

  const nextId = () => {
    return newId < 52982 && setNewId(newId + 1);
  };
  const prevId = () => {
    console.log(newId);
    return newId > 52826 && setNewId(newId - 1);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="details-content">
        <section className="details">
          <div className="left">
            <h3>{meal.strMeal}</h3>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <div className="prevNext">
              <img
                src="https://www.themealdb.com/images/icons/Arrow-Left.png"
                alt=""
                onClick={prevId}
              />
              <img
                src="https://www.themealdb.com/images/icons/Arrow-Right.png"
                alt=""
                onClick={nextId}
              />
            </div>
          </div>
          <div className="right">
            <h3>Ingredients</h3>
            <table className="table">
              <tbody>
                {recipe.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td
                        style={{
                          textAlign: "left",
                          color: "var(--primary-light)",
                          fontWeight: "600",
                          paddingRight: "5rem",
                        }}
                      >
                        {item[0]}
                      </td>
                      <td
                        style={{
                          textAlign: "right",
                          color: "var(--primary)",
                        }}
                      >
                        {item[1]}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </section>
        <section className="instructions">
          <h3>Instructions</h3>
          <span>
            {meal.strInstructions.slice(0, 300)}
            <button
              className="read-more-btn"
              onClick={() => setReadMore(!readMore)}
            >
              {readMore ? "" : "read more"}
            </button>
            {readMore && <span>{meal.strInstructions.slice(300)}</span>}
          </span>
        </section>
        <Footer />
      </div>{" "}
    </>
  );
};

export default MealDetails;
