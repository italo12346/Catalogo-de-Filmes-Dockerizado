import { addMovieAction } from "../actions";

export function MovieForm() {
  return (
    // 'action' que chama nossa função do servidor
    <form
      action={addMovieAction}
      className="glass p-8 rounded-2xl mb-12 border-white/20"
    >
      <h2 className="text-2xl font-bold mb-6">Cadastrar Novo Filme</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="title"
          placeholder="Título do Filme"
          className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
          required
        />
        <input
          name="director"
          placeholder="Diretor"
          className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
          required
        />
        <select
          name="genre"
          className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all"
        >
          <option value="Ação">Ação</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comédia">Comédia</option>
          <option value="Terror">Fantasia</option>
          <option value="Terror">Crime</option>
          <option value="Terror">Thriller</option>
        </select>
        <div className="flex gap-2">
          <input
            name="year"
            type="number"
            placeholder="Ano"
            className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all w-full"
            required
          />
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Nota (0-10)"
            className="p-3 rounded-xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 text-[#37313c] dark:text-[#e1f0f0] outline-none focus:border-[#f63090] transition-all w-full"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full mt-6 bg-gradient-to-r from-[#f63090] to-[#4cc9f4] hover:opacity-90 text-white font-black py-3 px-4 rounded-xl transition-all shadow-lg uppercase tracking-wider cursor-pointer"
      >
        Adicionar Filme
      </button>
    </form>
  );
}
