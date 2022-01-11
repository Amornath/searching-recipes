import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

import "./App.css";
import { Container } from "react-bootstrap";

const App = () => {
  const App_ID = "657875ee";
  const App_KEY = "32dac5f3f50243b613e3269f757de49d";
  // const exampleReq =
  //  `https://api.edamam.com/search?q=chicken&app_id=${ App_ID }&app_key=${App_KEY}`;
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${App_ID}&app_key=${App_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Container>
      <div className="App">
        <form onSubmit={getSearch} className="search-form">
          <input
            placeholder="Search your favourite recepie"
            className="search-bar text-center"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
        <div className="recipes">
          {recipes.map((recipe) => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default App;
