export default function Notification({ feedbackAvailability }) {
  return <>{feedbackAvailability === 0 && <p>No feedback yet</p>}</>;
}
