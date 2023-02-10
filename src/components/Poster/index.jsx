import React from "react";
import styles from "./Poster.module.css";

function Poster({ avgrating, imdbrating, poster, title, vtype, years }) {
  return (
    <div className={styles.poster}>
      <div className={styles.title}>{title}</div>
      <div>Imdb {imdbrating}</div>
      <img className={styles.img} src={poster} />
    </div>
  );
}

export default Poster;
