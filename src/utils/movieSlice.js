import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice ({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        latestMovies: null,
        movieTrailer: null,
        popularMovie: null,
        trendingMovie: null,
        upcomingMovie: null
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addLatestMovies: (state, action) => {
            state.latestMovies = action.payload;
        },
        addMovieTrailer: (state, action) => {
            state.movieTrailer = action.payload;
        },
        addPopularMovie: (state, action) => {
            state.popularMovie = action.payload;
        },
        addTrendingMovie: (state, action) => {
            state.trendingMovie = action.payload;
        },
        addUpcomingMovie: (state, action) => {
            state.upcomingMovie = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addLatestMovies, addMovieTrailer, addPopularMovie, addTrendingMovie, addUpcomingMovie} = movieSlice.actions;

export default movieSlice.reducer;