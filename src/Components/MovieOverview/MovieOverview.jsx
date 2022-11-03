import css from "./MovieOverview.module.css";
import { Modal } from "../Modal";

export const MovieOverview = ({ isOpen, close, children }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className={css.overview}>
        <div className={css["close-icon"]} onClick={close}>
          &times;
        </div>
        {children.title}
        <hr className={css["horizontal-divider"]} />
        {children.description}
      </div>
    </Modal>
  );
};
