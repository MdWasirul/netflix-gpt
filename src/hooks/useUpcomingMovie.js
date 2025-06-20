import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/movieSlice";

const useUcomingMovie = () => {
  const dispatch = useDispatch();
  //Fetch Data from TMDB API and updates the stored movies
  const getUpcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpcomingMovie(data.results));
      //   console.log(data.results);
    } catch (error) {
      console.error("Failed to fetch popular movies", error);
    }
  };

  useEffect(() => {
    getUpcomingMovies(); // Fetch on mount
  }, []);
};
export default useUcomingMovie;
