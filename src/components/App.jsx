import { useEffect, useState } from 'react'
import Description from './Description/Description'
import Options from './Options/Options'
import Notification from './Notification/Notification'
import Feedback from './Feedback/Feedback'
import './App.css'

export default function App () {

  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem('feedback');
    return savedFeedback ? JSON.parse(savedFeedback) : { good: 0, neutral: 0, bad: 0 };
  });


  useEffect(() => {
    window.localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [feedback]);
  
  const updateFeedback = (key) => {
    setFeedback((prevState) => ({ ...prevState, [key]: prevState[key] + 1 }));
  };
  
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };


  return (
    <div>
      <Description />
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback > 0 ? (
        <Feedback feedback={feedback} />) : (
        <Notification message="No feedback yet" />)}
    </div>
  );
}


