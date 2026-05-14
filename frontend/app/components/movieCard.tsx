"use client";

import { Movie } from "../types/movie";
import { deleteMovieAction } from "../actions";

interface MovieCardProps {
  movie: Movie;
  onEdit: (movie: Movie) => void;
}

export function MovieCard({ movie, onEdit }: MovieCardProps) {
  const handleDelete = async () => {
    if (confirm(`Deseja realmente excluir o filme "${movie.title}"?`)) {
      await deleteMovieAction(movie.id);
    }
  };

  return (
    <div className="glass p-6 rounded-3xl transition-all hover:scale-[1.02] border-white/20 group relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#f63090]/10 blur-3xl group-hover:bg-[#f63090]/20 transition-all" />

      <div className="flex justify-between items-start mb-4 relative z-10">
        <h3 className="text-xl font-black  group-hover:text-[#f63090] transition-colors line-clamp-1">
          {movie.title}
        </h3>
        <span className="px-3 py-1 text-[10px] font-black rounded-full bg-[#f63090] uppercase tracking-tighter">
          {movie.genre}
        </span>
      </div>

      <p className="/60 dark:text-[#e1f0f0]/60 text-sm mb-6 font-medium">
        Diretor: <span className=" dark:text-[#e1f0f0]">{movie.director}</span>
      </p>

      <div className="flex justify-between items-center border-t border-black/5 dark:border-white/5 pt-4 relative z-10">
        <div className="flex flex-col">
          <span className="text-[10px] uppercase /40 dark:text-[#e1f0f0]/40 font-bold">
            Lançamento
          </span>
          <span className="text-[#4cc9f4] font-black">{movie.releaseYear}</span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-[10px] uppercase /40 dark:text-[#e1f0f0]/40 font-bold">
            Avaliação
          </span>
          <span className="font-black text-[#f63090]">⭐ {movie.rating}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-6 relative z-10">
        <button
          onClick={() => onEdit(movie)}
          className="flex-1 bg-white/10 hover:bg-[#4cc9f4]/20  dark:text-[#e1f0f0] text-xs font-bold py-2 rounded-xl transition-all border border-black/5 dark:border-white/5"
        >
          EDITAR
        </button>
        <button
          onClick={handleDelete}
          className="flex-1 bg-white/10 hover:bg-red-500/20  dark:text-[#e1f0f0] hover:text-red-500 text-xs font-bold py-2 rounded-xl transition-all border border-black/5 dark:border-white/5"
        >
          EXCLUIR
        </button>
      </div>
    </div>
  );
}
