import css from "./FeaturesList.module.css";

export const FeaturesList = ({ features }) => {
  return (
    <ul className={css.features}>
      {Object.entries(features).map(([key, value]) => (
        <li key={key} className={css.feature}>
          <span className={css.feature__name}>{key}: </span>
          <span className={css.feature__value}>{value}</span>
        </li>
      ))}
    </ul>
  );
};
