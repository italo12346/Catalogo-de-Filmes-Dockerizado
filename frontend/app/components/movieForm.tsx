"use client";

import * as React from "react";

export function MovieForm() {
  return (
    <form className="glass p-8 rounded-2xl mb-12 border-white/20">
      <h2 className="text-2xl font-bold mb-6 ">Cadastrar Novo Filme</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          name="title"
          placeholder="Título do Filme"
          className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <input
          name="director"
          placeholder="Diretor"
          className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600"
          required
        />
        <select
          name="genre"
          className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600"
        >
          <option value="Ação">Ação</option>
          <option value="Drama">Drama</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Comédia">Comédia</option>
          <option value="Terror">Terror</option>
        </select>
        <div className="flex gap-2">
          <input
            name="year"
            type="number"
            placeholder="Ano"
            className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600 w-full"
            required
          />
          <input
            name="rating"
            type="number"
            step="0.1"
            placeholder="Nota (0-10)"
            className="p-2 rounded border dark:bg-gray-800 dark:border-gray-600 w-full"
            required
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-[#f63090] hover:bg-[#f63090]/80 cursor-pointer text-white font-bold my-2 py-2 px-4 rounded transition-colors"
      >
        Adicionar Filme
      </button>
    </form>
  );
}
