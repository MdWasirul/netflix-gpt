import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPopularMovie: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovie: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovie: (state, action) => {
      state.topRatedMovies = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailerVideo,
  addPopularMovie,
  addUpcomingMovie,
  addTopRatedMovie,
} = moviesSlice.actions;
export default moviesSlice.reducer;
