import "../styles/movie.css";
import Poster from "../components/Poster";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import RemoveModal from "../components/RemoveModal";
import { useNavigate, useParams } from "react-router-dom";
import slugMaker from "../components/slugMaker";
import InputForm from "../components/InputForm";
import axios from "axios";
export default function Movie(props) {
  const [modal, setModal] = useState(false);
  const [bool, setBool] = useState(false);
  const [movie, setMovie] = useState({
    title: "",
    year: "",
    description: "",
    poster: "",
    wallpaper: "",
  });
  const [deleted, setDeleted] = useState(false);
  const { id, slug } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    if (deleted) {
      navigate("/");
      window.location.reload(true);
    }
  }, [deleted]);
  useEffect(() => {
    props.movies.forEach((val) => {
      if (val.id === id && slugMaker(val.title) === slug) {
        setMovie(val);
        document.title = val.title || "";
      }
    });
  }, [id, props.movies]);

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(
        "http://localhost:4300/Web%20Projects/final-project/server/api/delete.php?id=" +
          id
      )
      .then((response) => {
        const done = response.data;
        if (response.data) {
          console.log(done);
          setDeleted(done);
        } else {
          setDeleted(done);
          console.log(done);
        }
      });
  };

  const toggleRemove = () => {
    setModal(!modal);
  };
  const toggleEdit = () => {
    setBool(!bool);
  };
  return (
    <div className="movie-container">
      <img
        src={movie.wallpaper}
        alt="background-img"
        className="background-img"
      />
      <div className="details-card">
        <Poster poster={movie.poster} className="movie-poster" />
        <section className="text-section">
          <h1>
            {movie.title} ({movie.year})
          </h1>
          <p className="description">{movie.description}</p>
        </section>
        <div className="edit-buttons">
          <button title="Edit" id="edit" onClick={toggleEdit}>
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
          <button title="Remove" id="remove" onClick={toggleRemove}>
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      </div>
      {modal && <RemoveModal onYes={handleDelete} onNo={toggleRemove} />}
      {bool && (
        <div className="overlay">
          <div className="edit-container">
            <InputForm
              movieValue={movie}
              onCancel={toggleEdit}
              edit={true}
              movieId={id}
            />
          </div>
        </div>
      )}
    </div>
  );
}
const notFound = {
  title: "Not Found",
  year: "404",
};
