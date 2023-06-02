import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState(false);
  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5"
    );
    const json = await response.json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    getMovies();
  });

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.movies}>
          {movies.map((movies) => (
            <Movie
              key={movies.id}
              id={movies.id}
              year={movies.year}
              coverImg={movies.medium_cover_image}
              title={movies.title}
              summary={movies.summary}
              genres={movies.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
