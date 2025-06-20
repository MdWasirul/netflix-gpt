import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addTopRatedMovie } from "../utils/movieSlice";

const useTopRatedMovie = () => {
  const dispatch = useDispatch();
  //Fetch Data from TMDB API and updates the stored movies

  const getTopRatedmovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addTopRatedMovie(data.results));
      //   console.log(data.results);
    } catch (error) {
      console.log("fail to fetch data", error);
    }
  };

  useEffect(() => {
    getTopRatedmovies();
  }, []);
};

export default useTopRatedMovie;
