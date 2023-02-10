import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search";
import { fetchSearch } from "./utils/CallApi";
import { fetchGenres } from "./utils/CallApi";
import { fetchCountries } from "./utils/CallApi";
import Poster from "./components/Poster";
import Result from "./container/Result";
import "./normalize.css";
import Navigation from "./components/Navigation";

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async () => {
    const response = await fetchSearch({ query });
    setResult(response.results);
  };
  // const handleGenres = async () => {
  //   console.log(await fetchGenres());
  // };
  // const handleCountries = async () => {
  //   console.log(await fetchCountries());
  // };
  return (
    <div className="App">
      <Navigation />;
      <input value={query} onChange={(event) => setQuery(event.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <Result movies={result} />
    </div>
  );
}

export default App;
