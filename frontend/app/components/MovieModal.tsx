"use client";

import * as React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { addMovieAction, updateMovieAction } from "../actions";
import { Movie } from "../types/movie";

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie?: Movie | null;
}

const CURRENT_YEAR = new Date().getFullYear();
const YEARS = Array.from({ length: 100 }, (_, i) => CURRENT_YEAR - i);

export function MovieModal({ isOpen, onClose, movie }: MovieModalProps) {
  const [selectedDate] = React.useState<Date | null>(
    movie?.releaseYear ? new Date(movie.releaseYear, 0, 1) : null,
  );
  const [rating, setRating] = React.useState<number>(movie?.rating ?? 5);

  if (!isOpen) return null;

  const handleSubmit = async (formData: FormData) => {
    if (selectedDate) {
      formData.set("year", selectedDate.getFullYear().toString());
    }
    formData.set("rating", rating.toString());

    if (movie?.id) {
      await updateMovieAction(movie.id.toString(), formData);
    } else {
      await addMovieAction(formData);
    }
    onClose();
  };

  const percentage = ((rating - 1) / 9) * 100;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4  backdrop-blur-sm">
      <div className="glass w-full max-w-lg p-8 rounded-3xl border-white/20 relative animate-in fade-in zoom-in duration-300">
        <button
          onClick={onClose}
          className="absolute top-4 right-4  hover:text-[#f63090] transition-colors"
        >
          ✕
        </button>

        <h2 className="text-3xl font-black text-gradient mb-8">
          {movie ? "EDITAR FILME" : "NOVO FILME"}
        </h2>

        <form action={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <input
              name="title"
              defaultValue={movie?.title || ""}
              placeholder="Título do Filme"
              className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
              required
            />
            <input
              name="director"
              defaultValue={movie?.director || ""}
              placeholder="Diretor"
              className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
              required
            />
            <select
              name="genre"
              defaultValue={movie?.genre || "Ação"}
              className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all appearance-none"
            >
              <option value="Ação">Ação</option>
              <option value="Aventura">Aventura</option>
              <option value="Animação">Animação</option>
              <option value="Comédia">Comédia</option>
              <option value="Crime">Crime</option>
              <option value="Drama">Drama</option>
              <option value="Documentário">Documentário</option>
              <option value="Fantasia">Fantasia</option>
              <option value="Faroeste">Faroeste</option>
              <option value="Ficção Científica">Ficção Científica</option>
              <option value="Musical">Musical</option>
              <option value="Romance">Romance</option>
              <option value="Suspense">Suspense</option>
              <option value="Terror">Terror</option>
              <option value="Thriller">Thriller</option>
            </select>

            <div className="grid grid-cols-2 gap-4">
              <select
                name="year"
                defaultValue={
                  movie?.releaseYear?.toString() || CURRENT_YEAR.toString()
                }
                className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all appearance-none"
              >
                {YEARS.map((y) => (
                  <option key={y} value={y.toString()}>
                    {y}
                  </option>
                ))}
              </select>
              {/* Slider nativo */}
              <div className="flex flex-col justify-center gap-3 px-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs  font-medium">Nota</span>
                  <span className="text-lg font-black text-[#f63090]">
                    {rating.toFixed(1)}
                  </span>
                  🌟
                </div>

                <input
                  type="range"
                  min="1"
                  max="10"
                  step="0.1"
                  value={rating}
                  onChange={(e) => setRating(parseFloat(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #f63090 ${percentage}%, rgba(0,0,0,0.1) ${percentage}%)`,
                  }}
                  className="
                    w-full h-2 rounded-full appearance-none cursor-pointer outline-none
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-5
                    [&::-webkit-slider-thumb]:h-5
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:bg-[#f63090]
                    [&::-webkit-slider-thumb]:border-2
                    [&::-webkit-slider-thumb]:border-white
                    [&::-webkit-slider-thumb]:shadow-md
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:transition-transform
                    [&::-webkit-slider-thumb]:hover:scale-125
                    [&::-moz-range-thumb]:w-5
                    [&::-moz-range-thumb]:h-5
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:bg-[#f63090]
                    [&::-moz-range-thumb]:border-2
                    [&::-moz-range-thumb]:border-white
                    [&::-moz-range-thumb]:cursor-pointer
                  "
                />

                <div className="flex justify-between text-xs text-[#37313c]/30 dark:text-[#e1f0f0]/30">
                  <span>1</span>
                  <span>5</span>
                  <span>10</span>
                </div>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-linear-to-r from-[#f63090] to-[#4cc9f4] text-white font-black py-4 rounded-2xl transition-all shadow-lg uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98]"
          >
            {movie ? "SALVAR ALTERAÇÕES" : "ADICIONAR AO CATÁLOGO"}
          </button>
        </form>
      </div>
    </div>
  );
}
