import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";

// state가 필요없으므로 class를 사용하지 않음
function Movie({ year, title, summary, poster }) {
  return (
    <div class="movie">
      <img src={poster} alt={title} title={title} />
      <div class="movie__data">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
      </div>
    </div>
  );
};

export default Movie;
