import Description from "../Description/Description";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import Feedback from "../Feedback/Feedback";
import "./App.css";

import { useState, useEffect } from "react";

export default function App() {
  // Встановлення значень стану об'єкта при завантаженні додатку
  const [feedback, setFeedback] = useState(() => {
    // Зчитуємо значення за ключем
    const savedObject = window.localStorage.getItem("saved-clicks");
    // Якщо там щось є, парсимо і повертаємо це значення як початкове значення стану
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    // У протилежному випадку повертаємо яке-небудь значення за замовчуванням
    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  // Записуємо поточне значення стану в LocalStorage
  useEffect(() => {
    window.localStorage.setItem("saved-clicks", JSON.stringify(feedback));
  }, [feedback]);

  // Обчислення додаткових значень додатку Total та Positive
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);

  // Функція зміни стану об'єкта при ввзаємодії з додатком
  function updateFeedback(feedbackType) {
    // Зміна значень стану при натисканні Good, Neutral та Bad btn
    if (feedbackType !== "reset") {
      setFeedback({
        ...feedback,
        [feedbackType]: feedback[feedbackType] + 1,
      });
    } else {
      // Скидання занчень стану при натисканні Reset btn
      setFeedback({
        ...feedback,
        good: 0,
        neutral: 0,
        bad: 0,
      });
    }
  }

  return (
    <>
      <Description />
      <Options onUpdate={updateFeedback} feedbackAvailability={totalFeedback} />
      <Notification feedbackAvailability={totalFeedback} />
      <Feedback
        feedbackValue={feedback}
        feedbackAvailability={totalFeedback}
        positiveFeedbackValue={positiveFeedback}
      />
    </>
  );
}
