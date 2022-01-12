import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeValue = e =>
    this.setState({ [e.target.name]: this.state[e.target.name] + 1 });

  countTotalFeedback = () =>
    Object.values(this.state).reduce((total, value) => (total += value), 0);

  countPositiveFeedbackPercentage = () =>
    Math.round((this.state.good * 100) / this.countTotalFeedback());

  render() {
    const {
      changeValue,
      state,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
    } = this;
    const haveFeedback = countTotalFeedback() !== 0;

    return (
      <div className="container">
        <Section title="Please leave Feedback" icon="true">
          <FeedbackOptions
            options={Object.keys(state)}
            onLeaveFeedback={changeValue}
          />
        </Section>
        <Section title="Statistics">
          {haveFeedback ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
