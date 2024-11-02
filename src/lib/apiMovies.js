import supabase from "../lib/supabase";
import { getSession } from "./apiAuth";

const API_KEY = import.meta.env.VITE_OMDB_KEY;

export async function insertRating({ movie_id, user_rating }) {
  const session = await getSession();
  if (!session) throw new Error("No session found");

  const user_id = session.user.id;

  const { error } = await supabase
    .from("ratings")
    .insert([{ movie_id, user_rating, user_id }])
    .select();
  if (error) throw new Error(error.message);
}

export async function getRatedMovies() {
  const session = await getSession();
  if (!session) return [];

  const user_id = session.user.id;

  const { data: ratedMoviesData, error } = await supabase
    .from("ratings")
    .select("*")
    .eq("user_id", user_id);
  if (error) throw new Error(error.message);

  // Ensure that ratedMoviesData is defined and has movies
  if (!ratedMoviesData || ratedMoviesData.length === 0) return [];

  // parallel fetch movie details
  const ratedMovies = await Promise.all(
    ratedMoviesData.map(async (movie) => {
      const movieId = movie.movie_id; // Access the movie_id from the rating object
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`,
      );
      const movieDetails = await res.json();
      return { ...movieDetails, userRating: movie.user_rating }; // Return the movie details
    }),
  );
  return ratedMovies;
}

export async function removeRatedMovie(movie_id) {
  const { error } = await supabase
    .from("ratings")
    .delete()
    .eq("movie_id", movie_id);
  if (error) throw new Error(error.message);
}

export async function fetchMovieSearch(query, signal) {
  const res = await fetch(
    `https://www.omdbapi.com/?&apikey=${API_KEY}&s=${query}`,
    { signal },
  );

  if (!res.ok) {
    throw new Error("Something went wrong with fetching movies");
  }

  const data = await res.json();
  if (data.Response === "False") {
    throw new Error("Movie not found");
  }

  return data.Search;
}

export async function fetchMovieDetails(id) {
  console.log("Fetching movie details for ID:", id);

  const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
  if (!res.ok) {
    throw new Error("Something went wrong with fetching movies");
  }
  const data = await res.json();
  if (data.Response === "False") {
    throw new Error("Error fetching movie details");
  }
  return data;
}
