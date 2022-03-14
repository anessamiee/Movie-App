import "./App.css";
import Header from "./components/Header";
import Movie from "./pages/Movie";
import Home from "./pages/Home";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";
import InputForm from "./components/InputForm";
import { useEffect, useState } from "react";
import axios from "axios";
import SearchResults from "./components/SearchResults";

function App() {
  const [movies, setMovies] = useState([
    {
      title: "",
      year: "",
      description: "",
      poster: "",
      wallpaper: "",
      id: 0,
    },
  ]);
  const [searchResult, setSearchResult] = useState([
    {
      title: "",
      year: "",
      description: "",
      poster: "",
      wallpaper: "",
      id: 0,
    },
  ]);

  useEffect(() => {
    getMovies();
  }, [movies]);

  const getMovies = () => {
    var temp;
    axios
      .request(
        "http://localhost:4300/Web%20Projects/final-project/server/api/read.php"
      )
      .then((response) => {
        temp = response.data.data;
        setMovies(temp);
      });
  };
  const colors = ["orange", "red", "blue"];

  return (
    <div className="App">
      <BrowserRouter>
        <Header setResult={setSearchResult} />
        <Routes>
          <Route path="/" element={<Home movies={movies} />} />
          <Route
            path="/Search-Results/"
            element={<SearchResults movies={searchResult} />}
          />
          <Route path="Add-Movie" element={<InputForm />} />
          <Route path="/Movie/:id/:slug" element={<Movie movies={movies} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
