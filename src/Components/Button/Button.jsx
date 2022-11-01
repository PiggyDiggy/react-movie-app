import css from "./Button.module.css";

export const Button = (props) => {
  return (
    <button className={css.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};
