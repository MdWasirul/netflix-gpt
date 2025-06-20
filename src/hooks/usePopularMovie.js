import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addPopularMovie } from "../utils/movieSlice";

const usePopularMovie = () => {
  const dispatch = useDispatch();
  //Fetch Data from TMDB API and updates the stored movies
  const getNowPopularMovie = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularMovie(data.results));
      // console.log("popualr movie");
      // console.log(data.results);
    } catch (error) {
      console.log("Failed to fetch popular movies", error);
    }
  };

  useEffect(() => {
    getNowPopularMovie();
  }, []);
};

export default usePopularMovie;
