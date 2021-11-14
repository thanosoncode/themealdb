import React from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const Api = () => {
  return (
    <>
      <div className="api-content">
        <div className="api">
          <article>
            <h5>
              <img
                src="https://www.themealdb.com/images/icons/thumb_up.gif"
                alt="thumb-up"
              />
              Support
            </h5>
            <p>
              The API and site will always remain free at point of access. If
              you love our service and want extra features you can sign up as a{" "}
              <Link
                to={{ pathname: "https://www.patreon.com/thedatadb" }}
                target="_blank"
              >
                Patreon supporter
              </Link>{" "}
              for $2.
              <br /> You can cancel anytime. This allows us to pay for the
              servers and bandwidth and develop new features.
            </p>
          </article>
          <article>
            <h5>
              <img
                src="https://www.themealdb.com/images/icons/api.png"
                alt="api"
              />
              Test API Keys
            </h5>
            <p>
              You can use the test API key "1" during development of your app or
              for educational use(see test links below) However you must apply
              for a key a production API key via email if releasing publicly on
              an appstore. The test key may be revoked at any time if abused.
            </p>
          </article>
          <article>
            <h5>
              <img
                src="https://www.themealdb.com/images/icons/up_arrow.png
"
                alt="up-arrow"
              />
              API Production Key Upgrade
            </h5>
            <p>
              All{" "}
              <Link
                to={{ pathname: "https://www.patreon.com/thedatadb" }}
                target="_blank"
              >
                {" "}
                Patreon Supporters
              </Link>
              have access to the beta version of the API which allows multiple
              ingredient filters. You also get access to adding your own meals
              and images. You can also list the full database rather than
              limited to 100 items. Please{" "}
              <Link
                to={{ pathname: "https://www.patreon.com/thedatadb" }}
                target="_blank"
              >
                sign up{" "}
              </Link>{" "}
              on Patreon then email us to get the upgraded.
            </p>
          </article>
          <article>
            <h5>
              <img
                src="https://www.themealdb.com/images/icons/email.png"
                alt="email"
              />
              Contact
            </h5>
            <p>
              Email: thedatadb@gmail.com (please state if you are a Patreon
              Supporter)
            </p>
          </article>
          <article>
            <h5>API Methods using the developer test key '1' as the API key</h5>
          </article>

          <article className="italic">
            Search meal by name
            <p className="purp">
              www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
            </p>
            List all meals by first letter
            <p className="purp">
              www.themealdb.com/api/json/v1/1/search.php?f=a
            </p>
            Lookup full meal details by id
            <p className="purp">
              www.themealdb.com/api/json/v1/1/lookup.php?i=52772
            </p>
            Lookup a single random meal
            <p className="purp">www.themealdb.com/api/json/v1/1/random.php</p>
            Lookup a selection of 10 random meals (only available to $2+{" "}
            <Link
              to={{ pathname: "https://www.patreon.com/thedatadb" }}
              target="_blank"
            >
              Patreon supporters{" "}
            </Link>
            )
            <p className="purp">
              www.themealdb.com/api/json/v1/1/randomselection.php
            </p>
            List all meal categories
            <p className="purp">
              www.themealdb.com/api/json/v1/1/categories.php
            </p>
            Latest Meals (only available to $2+{" "}
            <Link
              to={{ pathname: "https://www.patreon.com/thedatadb" }}
              target="_blank"
            >
              Patreon supporters{" "}
            </Link>
            )<p className="purp">www.themealdb.com/api/json/v1/1/latest.php</p>
            List all Categories, Area, Ingredients
            <p className="purp">
              www.themealdb.com/api/json/v1/1/list.php?c=list
            </p>
            <p className="purp">
              www.themealdb.com/api/json/v1/1/list.php?a=list
            </p>
            <p className="purp">
              www.themealdb.com/api/json/v1/1/list.php?i=list
            </p>
            Filter by main ingredient
            <p className="purp">
              www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast
            </p>
            Filter by multi-ingredient (only available to $2+
            <Link
              to={{ pathname: "https://www.patreon.com/thedatadb" }}
              target="_blank"
            >
              Patreon supporters{" "}
            </Link>
            )
            <p className="purp">
              www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast,garlic,salt
            </p>
            Filter by Category
            <p className="purp">
              www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
            </p>
            Filter by Area
            <p className="purp">
              www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
            </p>
          </article>
          <article>
            <h5>Images</h5>
            Meal Thumbnail Images
            <br />
            Add /preview to the end of the meal image URL
            <p className="purp">
              /images/media/meals/llcbn01574260722.jpg/preview
            </p>
            Ingredient Thumbnail Images
            <p className="purp">
              www.themealdb.com/images/ingredients/Lime.png
            </p>
            <p className="purp">
              www.themealdb.com/images/ingredients/Lime-Small.png
            </p>
          </article>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Api;
