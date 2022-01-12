import style from './FeedbackOptions.module.css';
import Button from './FeedbackButton';
const shortid = require('shortid');

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={style.button__container}>
    {options.map(name => (
      <Button
        key={shortid.generate()}
        name={name}
        onClick={onLeaveFeedback}
      ></Button>
    ))}
  </div>
);

export default FeedbackOptions;
