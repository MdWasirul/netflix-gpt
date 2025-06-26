import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constant";

const GptSearchPage = () => {
  return (
    <div className=" ">
      <div className="absolute -z-10">
        <img src={BG_URL} alt="GptSearchBackground" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearchPage;
/*{

Gpt Search Bar
gpt movie Suggestion

}  
*/
