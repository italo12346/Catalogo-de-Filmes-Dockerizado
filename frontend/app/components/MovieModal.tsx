"use client"

import * as React from "react"
import { Movie } from "../types/movie"
import { addMovieAction, updateMovieAction } from "../actions"

interface MovieModalProps {
  isOpen: boolean;
  onClose: () => void;
  movie?: Movie | null;
}

export function MovieModal({ isOpen, onClose, movie }: MovieModalProps) {
  if (!isOpen) return null;

  const handleSubmit = async (formData: FormData) => {
    if (movie?.id) {
      await updateMovieAction(movie.id, formData);
    } else {
      await addMovieAction(formData);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="glass w-full max-w-lg p-8 rounded-3xl border-white/20 relative animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-[#37313c] dark:text-[#e1f0f0] hover:text-[#f63090] transition-colors"
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
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
              <option value="Comédia">Comédia</option>
              <option value="Terror">Terror</option>
            </select>
            <div className="grid grid-cols-2 gap-4">
              <input
                name="year"
                type="number"
                defaultValue={movie?.releaseYear || ""}
                placeholder="Ano"
                className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
                required
              />
              <input
                name="rating"
                type="number"
                step="0.1"
                defaultValue={movie?.rating || ""}
                placeholder="Nota"
                className="w-full p-4 rounded-2xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-[#f63090] to-[#4cc9f4] text-white font-black py-4 rounded-2xl transition-all shadow-lg uppercase tracking-widest hover:scale-[1.02] active:scale-[0.98]"
          >
            {movie ? "SALVAR ALTERAÇÕES" : "ADICIONAR AO CATÁLOGO"}
          </button>
        </form>
      </div>
    </div>
  );
}
