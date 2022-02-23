import "../styles/movie-card.css";
import Poster from "./Poster";

export default function MovieCard(props) {
  return (
    <div
      className={props.viewState ? "card" : "list-card"}
      title="movie"
      onClick={props.onClick}
    >
      <Poster poster={props.poster} className="poster" />
      <div className={props.viewState ? "title" : "list-text"}>
        {props.title} ({props.year})
      </div>
    </div>
  );
}
