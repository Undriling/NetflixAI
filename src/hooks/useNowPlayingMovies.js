import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_Options, NowPlayingMovie_URL } from "../constants";

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies)

    const getNowPlayingMovies = async () => {
      const data = await fetch(NowPlayingMovie_URL, API_Options)

      const json = await data.json();
    //   console.log(json.results)

      dispatch(addNowPlayingMovies(json.results))
    };

    useEffect(() => {
      !nowPlayingMovies && getNowPlayingMovies();
    }, []);

}

export default useNowPlayingMovies;

