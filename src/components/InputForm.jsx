import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/input-form.css";
import slugMaker from "./slugMaker";

export default function InputForm(props) {
  const [form, setForm] = useState({
    title: "",
    year: "",
    description: "",
    poster: "",
    wallpaper: "",
  });
  const [edit, setEdit] = useState(false);
  const [success, setSuccess] = useState(false);
  const [edited, setEdited] = useState(false);
  let navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (props.movieValue !== undefined) {
      setForm(props.movieValue);
    }
  }, []);

  useEffect(() => {
    if (success) {
      navigate("/");
      window.location.reload(true);
    }
    if (edited) {
      navigate(`/Movie/${form.id}/${slugMaker(form.title)}`);
      window.location.reload(true);
    }
    if (props.edit) {
      setEdit(true);
    }
    document.title = "Add Movie" || "";
  }, [form, edit, success, edited]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!edit) {
      createRequest();
    } else {
      setForm({ ...form, id: props.movieId });
      updateRequest();
    }
  };
  const createRequest = () => {
    axios
      .post(
        "http://localhost:4300/Web%20Projects/final-project/server/api/create.php",
        form
      )
      .then((response) => {
        const done = response.data;
        console.log(done);
        if (response.data) {
          console.log(done);
          setSuccess(done);
        } else {
          setSuccess(done);
          console.log(done);
        }
      });
  };

  const updateRequest = () => {
    axios
      .post(
        "http://localhost:4300/Web%20Projects/final-project/server/api/update.php",
        form
      )
      .then((response) => {
        const done = response.data;
        if (response.data) {
          console.log(done);
          setEdited(done);
        } else {
          setEdited(done);
          console.log(done);
        }
      });
  };

  const s = () => {
    console.log(form);
  };

  return (
    <form className="input-form-container" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Title"
        defaultValue={form.title}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <input
        type="number"
        name="year"
        id="yaer"
        placeholder="Year"
        defaultValue={form.year}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="7"
        placeholder="Description"
        defaultValue={form.description}
        onChange={handleChange}
        autoComplete="off"
        required
      />
      <input
        type="text"
        name="poster"
        id="poster"
        placeholder="Poster URL (2:3)"
        defaultValue={form.poster}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <input
        type="text"
        name="wallpaper"
        id="wallpaper"
        placeholder="Wallpaper URL (16:9)"
        defaultValue={form.wallpaper}
        onChange={handleChange}
        required
        autoComplete="off"
      />
      <div className="input-btns">
        <button type="submit" id="input-submit">
          Submit
        </button>
        <button
          type="reset"
          id="input-cancel"
          onClick={edit ? props.onCancel : () => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
