import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="-mt-72 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Horror Movie"} movies={movies.nowPlayingMovies} />
          <MovieList
            title={"Upcoming Movie"}
            movies={movies.nowPlayingMovies}
          />
          <MovieList
            title={"Science Fiction"}
            movies={movies.nowPlayingMovies}
          />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;

{
  /*
   -Movie list - Trending now
    --Horizonal Video Card *n
   -Movie List - Popular  
   -Movie List -Trending
   -Movie list -Now plying

  */
}
