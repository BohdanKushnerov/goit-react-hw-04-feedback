import { useState, useReducer, useRef } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import css from './App.module.css';

export function App() {
  // const [feedback, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });

  // const { good, neutral, bad } = feedback;

  // const handleIncrement = option => {
  //   setFeedback(prevState => ({
  //     ...prevState,
  //     [option]: prevState[option] + 1,
  //   }));
  // };

  //======================================================================

  // const { current } = useRef({ good: 0, neutral: 0, bad: 0 });

  // const feedbackReducer = (state, action) => {
  //   switch (action.type) {
  //     case 'increment':
  //       return { ...state, [action.payload]: state[action.payload] + 1 };
  //     default:
  //       return state;
  //   }
  // };
  // const [feedback, dispatch] = useReducer(feedbackReducer, current);

  // const handleIncrement = option => {
  //   dispatch({ type: 'increment', payload: option });
  // };

  // const { good, neutral, bad } = feedback;

  //====================================================================

  const { current } = useRef({ good: 0, neutral: 0, bad: 0 });

  const feedbackReducer = (state, action) => {
    return { ...state, [action]: state[action] + 1 };
  };

  const [feedback, dispatch] = useReducer(feedbackReducer, current);

  const handleIncrement = option => {
    dispatch(option);
  };

  const { good, neutral, bad } = feedback;
  //======================================================================

  const countTotalFeedback = () => {
    return Object.values(feedback).reduce((acc, item) => (acc += item), 0);
  };

  const countPositiveFeedbackPercentage = () => {
    if (!good) return 0;
    else {
      return Math.round((good * 100) / countTotalFeedback());
    }
  };

  return (
    <div className={css.container}>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      {countTotalFeedback() ? (
        <Section title={'Statistics'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </Section>
      ) : (
        <Notification message={'There is no feedback'} />
      )}
    </div>
  );
}
