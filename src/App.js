import { Component } from 'react';
import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = { good: 0, neutral: 0, bad: 0 };

  handleFeedback = ({ target }) => {
    const feedback = target.textContent;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
  };

  countTotalFeedback = () => {
    const totalFeedback = Object.values(this.state).reduce(
      (acc, el) => acc + el,
      0,
    );
    return totalFeedback;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercent = Math.round(
      (this.state.good * 100) / this.countTotalFeedback(),
    );
    return positivePercent > 0 ? positivePercent : 0;
  };

  render() {
    const feedbackOptions = Object.keys({ ...this.state });

    return (
      <div className="App">
        <Section title="Please leave feedback" state={this.state}>
          <FeedbackOptions
            options={feedbackOptions}
            onLeaveFeedback={this.handleFeedback}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback is given" />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
