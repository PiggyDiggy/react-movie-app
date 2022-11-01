import css from "./Search.module.css";

export const Search = (props) => {
  const placeholderAnimated = props.search.length !== 0;

  return (
    <form className={css.search__wrapper} onSubmit={(e) => e.preventDefault()}>
      <div className={`${css.search} ${props.error ? css.search_error : ""}`}>
        <input
          className={css.search__input}
          type="text"
          value={props.search}
          onChange={(e) => props.setSearch(e.target.value)}
        />
        <div
          className={`${css.search__placeholder} ${
            placeholderAnimated ? css.search__placeholder_animated : ""
          }`}
        >
          {props.placeholder}
        </div>
        <div className={css.search__cross} title="Clear" onClick={props.clear}>
          &times;
        </div>
        <div className={css.search__divider}></div>
        <button
          className={css.search__button}
          type="submit"
          onClick={props.onSubmit}
        >
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
          >
            <title>Search</title>
            <path d="M31.008 27.231l-7.58-6.447c-0.784-0.705-1.622-1.029-2.299-0.998 1.789-2.096 2.87-4.815 2.87-7.787 0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12c2.972 0 5.691-1.081 7.787-2.87-0.031 0.677 0.293 1.515 0.998 2.299l6.447 7.58c1.104 1.226 2.907 1.33 4.007 0.23s0.997-2.903-0.23-4.007zM12 20c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"></path>
          </svg>
        </button>
      </div>
    </form>
  );
};
