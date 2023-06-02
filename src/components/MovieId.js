import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

function MovieId({ id, coverImg, title, year, description_full, genres }) {
  return (
    <div className={styles.movie}>
      <div>
        <div className={""}>
          <img src={coverImg} alt={title} className={styles.movie__img} />
          <h2 className={styles.movie__title}>
            <Link to={`/movie/${id}`}>{title}</Link>
          </h2>
          <h3 className={styles.movie__year}>{year}</h3>
        </div>
        <div>
          <p>{description_full}</p>
        </div>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

MovieId.prototypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description_full: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieId;
