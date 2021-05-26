import './App.css';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

const App = () => (
  <div className="App">
    <Section title="Please leave feedback">
      <FeedbackOptions />
    </Section>
    <Section title="Statistics">
      <Statistics />
    </Section>
  </div>
);

export default App;
