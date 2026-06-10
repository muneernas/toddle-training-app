import schoolLogo from '../assets/school-logo.png';
import './SchoolLogo.css';

export default function SchoolLogo({ variant = 'header' }) {
  return (
    <img
      src={schoolLogo}
      alt="Ahliyyah & Mutran"
      className={`school-logo school-logo--${variant}`}
    />
  );
}
