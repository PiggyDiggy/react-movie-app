import css from "./Skeleton.module.css";

export const Skeleton = ({ count }) => {
  return (
    <ul className={css.skeleton__list}>
      {Array(count)
        .fill(0)
        .map((_, index) => (
          <li
            key={index}
            style={{ "--data-count": index }}
            className={css.skeleton__field}
          ></li>
        ))}
    </ul>
  );
};
