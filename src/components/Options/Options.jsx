import css from "./Options.module.css";

export default function Options({ onUpdate, feedbackAvailability }) {
  return (
    <div className={css.optionsBtnContainer}>
      <button className={css.optionsBtn} onClick={() => onUpdate("good")} type="button">
        Good
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("neutral")} type="button">
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("bad")} type="button">
        Bad
      </button>
      {feedbackAvailability > 0 && (
        <button className={css.optionsBtn} onClick={() => onUpdate("reset")} type="button">
          Reset
        </button>
      )}
    </div>
  );
}
