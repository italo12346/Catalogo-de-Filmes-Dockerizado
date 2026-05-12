import { Movie } from "../types/movie";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="glass p-6 rounded-2xl transition-all hover:scale-105 hover:border-[#f63090]/50 group">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold  group-hover:text-[#4cc9f4] transition-colors">
          {movie.title}
        </h3>
        <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#f63090] text-white shadow-[0_0_15px_rgba(246,48,144,0.4)]">
          {movie.genre}
        </span>
      </div>
      <p className=" mb-4">Diretor: {movie.director}</p>
      <div className="flex justify-between items-center border-t border-white/10 pt-4">
        <span className="text-[#4cc9f4] font-medium">{movie.releaseYear}</span>
        <span className="font-bold text-[#f63090]">⭐ {movie.rating}</span>
      </div>
    </div>
  );
}
