import axios from "axios";
import "../styles/remove-modal.css";

export default function RemoveModal(props) {
  
  return (
    <div className="overlay">
      <div className="modal-card">
        <h1>Confirm</h1>
        <form className="modal-buttons" onSubmit={props.onYes}>
          <button type="submit">Yes</button>
          <button onClick={props.onNo}>No</button>
        </form>
      </div>
    </div>
  );
}
