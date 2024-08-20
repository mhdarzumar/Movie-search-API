import { useEffect, useState } from "react";
import "./App.css";
import Movies from "./movies";
const API_URL = "http://www.omdbapi.com?apikey=b6003d8a";

function App() {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
    if (data.Search) {
      setMovies(data.Search);
    } else {
      setMovies([]);
    }
  };

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  return (
    <div className="flex justify-center items-center flex-col p-4">
      <h1 className="text-5xl">Movie Land</h1>
      <div className="mt-10 flex flex-1 border-none px-4 text-2xl bg-custom-dark">
        <input
          placeholder="search movies"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search text-2xl text-green-200 rounded-3xl pr-4"
        />
        <img
          src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
          alt="search"
          onClick={() => searchMovies(search)}
          className="w-8 h-8 cursor-pointer"
        />
      </div>
      {movies.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <Movies key={movie.imdbID} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="mt-10">
          <p className="text-2xl">Oops! No movies found.</p>
        </div>
      )}
    </div>
  );
}

export default App;
