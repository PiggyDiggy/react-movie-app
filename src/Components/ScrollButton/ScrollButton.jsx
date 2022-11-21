import { useState, useEffect, useRef } from "react";
import css from "./ScrollButton.module.css";

export const ScrollButton = ({ scrollable }) => {
  const [buttonVisible, setButtonVisible] = useState(false);
  const prevScrollVal = useRef(0);

  const showScrollButton = ({ target }) => {
    const { scrollTop } = target;
    setButtonVisible(scrollTop !== 0 && scrollTop < prevScrollVal.current);
    prevScrollVal.current = scrollTop;
  };

  useEffect(() => {
    if (scrollable === null) return;
    scrollable.addEventListener("scroll", showScrollButton);

    return () => {
      scrollable.removeEventListener("scroll", showScrollButton);
    };
  }, [scrollable]);

  return (
    <div
      onClick={() => scrollable.scroll(0, 0)}
      className={`${css["scroll-button"]} ${buttonVisible ? css["scroll-button_active"] : ""}`}
    >
      <svg viewBox="0 0 100 100" stroke="var(--background)" strokeWidth="6" strokeLinecap="round">
        <line x1="25" y1="60" x2="50" y2="35"></line>
        <line x1="75" y1="60" x2="50" y2="35"></line>
      </svg>
    </div>
  );
};
