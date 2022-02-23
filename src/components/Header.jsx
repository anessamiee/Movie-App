import "../styles/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faMagnifyingGlass,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Outlet, NavLink as Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Header(props) {
  const [input, setInput] = useState();
  const [searchDone, setSearchDone] = useState(false);

  useEffect(() => {
    if (searchDone) {
      navigate("/Search-Results");
    }
  }, [searchDone,input]);
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.search != "")
      axios
        .get(
          "http://localhost:4300/Web%20Projects/final-project/server/api/search.php?search=" +
            input.search
        )
        .then((respone) => {
          var temp = respone.data.data;
          props.setResult(temp);
          setSearchDone(true);
          console.log(input.search);
          console.log(respone.data.data);
        });
  };
  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <header className="header">
        {buttons}
        <form className="search-form" role="search" onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            className="search-box"
            placeholder="Search"
            onChange={handleChange}
            autoComplete="off"
          />
          <button type="submit" className="submit-search">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </header>
      <div className="footer">{buttons}</div>
      <Outlet />
    </>
  );
}

const buttons = (
  <div className="buttons">
    <Link to="/" id="home" activeclassname="active">
      <FontAwesomeIcon icon={faHome} title="Home" />
    </Link>
    <Link to="Add-Movie" id="add-page" activeclassname="active">
      <FontAwesomeIcon icon={faPlus} title="Add New Movie" />
    </Link>
  </div>
);
