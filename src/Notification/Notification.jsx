import style from './Notification.module.css';

const Notification = ({ message }) => (
  <p className={style.notification}>{message}</p>
);

export default Notification;
