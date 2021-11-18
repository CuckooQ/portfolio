import ReactDOM from "react-dom";

function ModalPortals({ children }) {
  const modalEl = document.getElementById("modal-root");
  return ReactDOM.createPortal(children, modalEl);
}

export default ModalPortals;
