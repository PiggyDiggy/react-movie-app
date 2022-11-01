import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import { useRef } from "react";
import "./Modal.css";

const modalNode = document.querySelector("#modal");

export const Modal = ({ isOpen, close, children }) => {
  const modalRef = useRef(null);

  return ReactDOM.createPortal(
    <CSSTransition
      nodeRef={modalRef}
      timeout={100}
      in={isOpen}
      mountOnEnter
      unmountOnExit
      classNames="modal"
    >
      <div ref={modalRef} className="modal-container">
        {children}
        <div className="backdrop" onClick={close}></div>
      </div>
    </CSSTransition>,
    modalNode
  );
};
