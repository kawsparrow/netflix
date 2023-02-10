import styles from "./style.module.css";
import Poster from "../../components/Poster";
import React from "react";
import Container from "../Container";

const Result = ({ movies }) => {
  return (
    <Container>
      <div className={styles.container}>
        {movies.length &&
          movies.map(
            (movie) =>
              movie.imdbrating > 0 && <Poster key={movie.id} {...movie} />
          )}
        ;
      </div>
    </Container>
  );
};

export default Result;
