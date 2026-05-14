"use server";

import { revalidatePath } from "next/cache";
import { createMovie, updateMovie, deleteMovie } from "./lib/api";

export async function addMovieAction(formData: FormData) {
  const movieData = {
    title: formData.get("title"),
    director: formData.get("director"),
    genre: formData.get("genre"),
    releaseYear: Number(formData.get("year")),
    rating: Number(formData.get("rating")),
  };

  try {
    await createMovie(movieData);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}

export async function updateMovieAction(id: string, formData: FormData) {
  const movieData = {
    title: formData.get("title"),
    director: formData.get("director"),
    genre: formData.get("genre"),
    releaseYear: Number(formData.get("year")),
    rating: Number(formData.get("rating")),
  };

  try {
    await updateMovie(id, movieData);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}

export async function deleteMovieAction(id: string) {
  try {
    await deleteMovie(id);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}
