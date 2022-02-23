import { useEffect, useState } from "react";
import { NavLink as Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "../styles/home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBorderAll, faList } from "@fortawesome/free-solid-svg-icons";
import slugMaker from "../components/slugMaker";

export default function Home(props) {
  const [view, setView] = useState(true);
  useEffect(() => {
    document.title = "Home" || "";
  }, []);
  const movieCards = props.movies.map((val) => {
    return (
      <Link to={`/Movie/${val.id}/${slugMaker(val.title)}`} key={val.id}>
        <MovieCard
          poster={val.poster}
          title={val.title}
          year={val.year}
          key={val.id}
          viewState={view}
        />
      </Link>
    );
  });

  return (
    <div className="home">
      <div className="view-btns">
        <button onClick={() => setView(true)}>
          <FontAwesomeIcon icon={faBorderAll} />
        </button>
        <button onClick={() => setView(false)}>
          <FontAwesomeIcon icon={faList} />
        </button>
      </div>
      <div className={view ? "grid-container" : "list-view"}>{movieCards}</div>
    </div>
  );
}
