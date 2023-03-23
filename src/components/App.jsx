import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

console.log(Notification);

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
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>

        {this.countTotalFeedback() ? (
          <Section title={'Statistics'}>
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Section>
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </div>
    );
  }
}
