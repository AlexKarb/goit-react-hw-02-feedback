import style from './Section.module.css';
import { SiStarbucks } from 'react-icons/si';
const { section, section__title, section__icon } = style;

const Section = ({ title, children, icon = false }) => (
  <div className={section}>
    {icon && <SiStarbucks className={section__icon} />}
    <h2 className={section__title}>{title}</h2>
    {children}
  </div>
);

export default Section;
