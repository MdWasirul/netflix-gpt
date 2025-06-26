import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useUcomingMovie from "../hooks/useUpcomingMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import GptSearchPage from "./GptSearchPage";
import { useSelector } from "react-redux";

const Browse = () => {
  const gptSearch = useSelector((store) => store.gpt.showGptSearch);
  console.log(gptSearch);
  useNowPlayingMovies();
  usePopularMovie();
  useUcomingMovie();
  useTopRatedMovie();
  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearchPage />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;

{
  /*
  MainContainer
   -VideoBackground
   -VideoTitle
  Secondary Container
    -MOvieList * n
     -Cards * n 
   
  
  */
}
