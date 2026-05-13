"use server";

import { revalidatePath } from "next/cache";
import { createMovie } from "./lib/api";

export async function addMovieAction(formData: FormData) {
  const movieData = {
    title: formData.get("title"),
    director: formData.get("director"),
    genre: formData.get("genre"),
    year: Number(formData.get("year")),
    rating: Number(formData.get("rating")),
  };

  try {
    await createMovie(movieData);
    revalidatePath("/");
  } catch (error) {
    console.error(error);
  }
}
