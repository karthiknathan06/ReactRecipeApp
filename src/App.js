import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./recipe";
import NavbarPage from "./navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  // Api from edamam.com
  const APPID = "XXXXXX";
  const APPKEY = "XXXXXXXXXXXXXXXXXX";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("chicken");
  const [query, setQuery] = useState("");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${APPID}&app_key=${APPKEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  };

  return (
    <div className="App">
      <NavbarPage />
      <form onSubmit={getSearch} className="search-form">
        <input
          type="text"
          className="search-bar"
          onChange={updateSearch}
          value={search}
        />
        <button className="search-button" type="submit">
          Submit
        </button>
      </form>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
