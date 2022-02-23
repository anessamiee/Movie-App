import "../styles/poster.css";

export default function Poster(props) {
  return (
    <div className="poster-con">
      <img src={props.poster} alt="poster" className="poster" />
    </div>
  );
}
