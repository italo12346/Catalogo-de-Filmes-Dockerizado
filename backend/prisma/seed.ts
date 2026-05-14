import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const movies = [
    {
      title: "O Poderoso Chefão",
      director: "Francis Ford Coppola",
      genre: "Crime",
      releaseYear: 1972,
      rating: 9,
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      genre: "Crime",
      releaseYear: 1994,
      rating: 9,
    },
    {
      title: "O Senhor dos Anéis: O Retorno do Rei",
      director: "Peter Jackson",
      genre: "Fantasia",
      releaseYear: 2003,
      rating: 9,
    },
    {
      title: "Interestelar",
      director: "Christopher Nolan",
      genre: "Sci-Fi",
      releaseYear: 2014,
      rating: 9,
    },
    {
      title: "Matrix",
      director: "Lana e Lilly Wachowski",
      genre: "Sci-Fi",
      releaseYear: 1999,
      rating: 9,
    },
    {
      title: "Clube da Luta",
      director: "David Fincher",
      genre: "Drama",
      releaseYear: 1999,
      rating: 9,
    },
    {
      title: "Forrest Gump",
      director: "Robert Zemeckis",
      genre: "Drama",
      releaseYear: 1994,
      rating: 9,
    },
    {
      title: "Coringa",
      director: "Todd Phillips",
      genre: "Drama",
      releaseYear: 2019,
      rating: 8,
    },
    {
      title: "Parasita",
      director: "Bong Joon-ho",
      genre: "Thriller",
      releaseYear: 2019,
      rating: 9,
    },
    {
      title: "Whiplash",
      director: "Damien Chazelle",
      genre: "Drama",
      releaseYear: 2014,
      rating: 9,
    },
  ];

  console.log("🌱 Populando banco de dados...");

  for (const movie of movies) {
    await prisma.movie.create({ data: movie });
    console.log(`✅ ${movie.title}`);
  }

  console.log("🎬 Seed concluído!");
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
