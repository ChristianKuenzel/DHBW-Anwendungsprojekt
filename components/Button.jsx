/*Sophie Strittmatter */
import buttonStyles from '../styles/DhbwButton.module.css';

/* Komponente des überall verwendeten Buttons: normaler Button bekommt den Style aus der CSS-File übergeben und der Text wird 
   erst bei Verwendung des Buttons mitgegeben und steht als p-Element im Button*/
export default function DhbwButton({ title }) {
    return (
        <button className={buttonStyles.dhbwButton}>
            <p>{title}</p>
        </button>
    );
}