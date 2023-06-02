import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import styles from "./Details.module.css";
import MovieId from "../components/MovieId";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);
  const { id } = useParams();

  const getMovieId = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies([json.data.movie]);
    setLoading(false);
  };

  useEffect(() => {
    getMovieId();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.container_loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <div className={styles.container_movie}>
          {movie.map((elem) => {
            return (
              <MovieId
                key={elem.id}
                id={elem.id}
                coverImg={elem.medium_cover_image}
                title={elem.title}
                year={elem.year}
                description_full={elem.description_full}
                genres={elem.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
export default Detail;
