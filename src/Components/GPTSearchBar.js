import { useSelector } from "react-redux";
import lang from "../utils/languageConstants";

const GPTSearchBar = () => {
    const langKey = useSelector(store => store.config.lang)

    return (
        <div className="pt-[10%] flex justify-center">
        <form className="bg-black w-1/2 grid grid-cols-12 rounded-lg">
            <input
            type="text"
            className="p-2 m-2 rounded-lg col-span-9"
            placeholder={lang[langKey].gptSearchPlaceholder}
            />
            <button className="py-2 px-4 bg-red-700 text-white rounded-lg col-span-3 m-2">
            {lang[langKey].search}
            </button>
        </form>
        </div>
    );
};

export default GPTSearchBar;
