export default function Feedback({
  feedbackValue: { good, neutral, bad },
  feedbackAvailability,
  positiveFeedbackValue,
}) {
  return (
    <>
      {feedbackAvailability > 0 && (
        <ul>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{feedbackAvailability}</span>
          </li>
          <li>
            Positive: <span>{positiveFeedbackValue}</span>%
          </li>
        </ul>
      )}
    </>
  );
}
