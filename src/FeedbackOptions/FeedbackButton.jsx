import style from './FeedbackOptions.module.css';

const Button = ({ name, onClick }) => (
  <button type="button" className={style.button} onClick={onClick} name={name}>
    {name}
  </button>
);

export default Button;
