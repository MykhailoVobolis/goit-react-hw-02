import css from "./Options.module.css";

export default function Options({ onUpdate, feedbackAvailability }) {
  return (
    <div className={css.optionsBtnContainer}>
      <button className={css.optionsBtn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {feedbackAvailability > 0 && (
        <button className={css.optionsBtn} onClick={() => onUpdate("reset")}>
          Reset
        </button>
      )}
    </div>
  );
}
