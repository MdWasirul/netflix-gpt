import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  //fetch Trailer Video  && Updating The Store with trailer Video DAta
  const getTrailerVideo = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const data = await response.json();
    // console.log(data);
    const filterData = data.results.filter((video) => video.type == "Trailer");
    const trailer = filterData.length ? filterData[1] : data.results[0];
    // console.log(trailer);
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getTrailerVideo();
  }, []);
};
export default useMovieTrailer;
