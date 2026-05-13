const API_URL = "http://localhost:3001/api";

export async function fetchMovies() {
  const response = await fetch(`${API_URL}/movies`, { cache: "no-store" });
  if (!response.ok) throw new Error("Erro ao buscar filmes");

  const data = await response.json();
  const list = Array.isArray(data) ? data : (data.movies ?? data.data ?? []);

  return list.map((item: Record<string, Record<string, unknown>>) => ({
    id: item.props.id,
    title: item.props.title,
    director: item.props.director,
    genre: item.props.genre,
    year: item.props.releaseYear,
    rating: item.props.rating,
  }));
}

export async function createMovie(data: Record<string, unknown>) {
  const response = await fetch(`${API_URL}/movies`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Erro ao salvar filme");
  return response.json();
}
