import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef, useState } from "react";
import openai from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResult } from "../utils/GPTSlice";

const GPTSearchBar = () => {
  const [error, setError] = useState(false);
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  //Search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };

  const handleGPTSearchClick = async () => {
    const GPTQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example results given ahead, Example Result:Dhamaal, Jawaan, Sholay, Phir Hera Pheri, Don";

    const GPTResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: { GPTQuery } }],
      model: "gpt-3.5-turbo",
    });

    if (!GPTResults.choices) {
      setError(true);
    }

    const GPTMovies = GPTResults.choices?.[0]?.message?.content.split(",");
    const promiseArray = GPTMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGPTMovieResult({ movieNames: GPTMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center">
      <form
        className="bg-black w-full mx-3 md:mx-0 md:w-1/2 grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-2 m-2 rounded-lg col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
      {error && <p className="text-red-700 font-bold">Something went wrong!</p>}
    </div>
  );
};

export default GPTSearchBar;
