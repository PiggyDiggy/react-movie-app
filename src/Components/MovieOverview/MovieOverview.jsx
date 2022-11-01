import css from "./MovieOverview.module.css";
import { Modal } from "../Modal";
import { FeaturesList } from "../FeaturesList";

export const MovieOverview = ({ isOpen, close, movie, info }) => {
  return (
    <Modal isOpen={isOpen} close={close}>
      <div className={css.overview}>
        <div className={css["close-icon"]} onClick={close}>
          &times;
        </div>
        <h1 className={css.overview__title}>
          <span>{movie.Title}</span>
          <span className={css.overview__type}>— {movie.Type}</span>
        </h1>
        <hr className={css["horizontal-divider"]} />
        <FeaturesList features={info} />
      </div>
    </Modal>
  );
};
