"use client";

import { useEffect, useState } from "react";
import { useKey } from "../../hooks/useKey";
import Spinner from "../../components/Spinner";
import BackButton from "../../components/BackButton";
import RatingSection from "./RatingSection";
import MovieHeader from "./MovieHeader";
import MovieMoreInfo from "./MovieMoreInfo";
import { useUIContext } from "../../contexts/UIContext";

async function fetchMovieDetails(id, signal) {
  const API_KEY = import.meta.env.VITE_OMDB_KEY;

  const res = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`, {
    signal,
  });
  if (!res.ok) {
    throw new Error("Something went wrong with fetching movies");
  }
  const data = await res.json();
  if (data.Response === "False") {
    throw new Error("Error fetching movie details");
  }
  return data;
}

function MovieDetailsSkeleton() {
  return (
    <div className="animate-pulse rounded-2xl bg-background-500">
      <div className="h-64 rounded-t-2xl bg-gray-300"></div>
      <div className="p-6">
        <div className="mb-4 h-8 w-3/4 rounded bg-gray-300"></div>
        <div className="mb-2 h-4 w-1/2 rounded bg-gray-300"></div>
        <div className="mb-4 h-4 w-1/4 rounded bg-gray-300"></div>
        <div className="mb-4 h-20 rounded bg-gray-300"></div>
        <div className="h-8 w-1/3 rounded bg-gray-300"></div>
      </div>
    </div>
  );
}

export default function MovieDetails() {
  const { selectedId, handleCloseMovie } = useUIContext();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useKey("Escape", handleCloseMovie);

  useEffect(() => {
    const controller = new AbortController();

    async function getMovieDetails() {
      try {
        setIsLoading(true);
        setError("");

        const data = await fetchMovieDetails(selectedId, controller.signal);
        setMovie(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          setError(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    if (selectedId) {
      getMovieDetails();
    }

    return () => {
      controller.abort();
      setMovie({});
    };
  }, [selectedId]);

  useEffect(() => {
    if (!movie.Title) return;
    document.title = `Movie | ${movie.Title}`;

    return function () {
      document.title = "Popcan";
    };
  }, [movie.Title]);

  if (!selectedId || selectedId === "") {
    return <div className="mt-16 text-center"> </div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <div>
      {isLoading ? (
        <MovieDetailsSkeleton />
      ) : (
        <div>
          <div className="mb-5 md:hidden">
            <BackButton />
          </div>
          <div className="rounded-2xl bg-background-500">
            <MovieHeader
              poster={movie.Poster}
              title={movie.Title}
              released={movie.Released}
              genre={movie.Genre}
              runtime={movie.Runtime}
              imdbRating={movie.imdbRating}
            />
            <section className="flex flex-col items-center gap-6 px-6 py-3 pb-8">
              <RatingSection />
              <MovieMoreInfo
                plot={movie.Plot}
                actors={movie.Actors}
                director={movie.Director}
              />
            </section>
          </div>
        </div>
      )}
    </div>
  );
}
