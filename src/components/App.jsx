import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, item) => (acc += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    if (this.state['good'] === 0) return 0;
    else {
      return Math.round((this.state['good'] * 100) / this.countTotalFeedback());
    }
  };

  handleIncrement = options => {
    this.setState(prevState => {
      return {
        [options]: prevState[options] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>

        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleIncrement}
        />

        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback}
          positivePercentage={this.countPositiveFeedbackPercentage}
        ></Statistics>
      </div>
    );
  }
}
