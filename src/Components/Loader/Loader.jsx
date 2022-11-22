import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.loader}>
      <svg
        viewBox="0 0 100 100"
        fill="transparent"
        stroke="var(--text-light)"
        strokeWidth="8"
        strokeLinecap="round"
      >
        <circle cx="50" cy="50" r="46" />
      </svg>
    </div>
  );
};
