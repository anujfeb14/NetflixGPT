import { BG_IMAGE } from "../utils/constants";
import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:h-auto object-cover" src={BG_IMAGE} alt="background" />
      </div>
    <div className="">
      <GPTSearchBar />
      <GPTMovieSuggestions />
    </div>
    </>
  );
};

export default GPTSearch;
