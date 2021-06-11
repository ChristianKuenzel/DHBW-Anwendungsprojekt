import buttonStyles from '../styles/DhbwButton.module.css';


export default function DhbwButton({ title}) {
    return (
        <button className={buttonStyles.dhbwButton}>
            <p>{title}</p>
        </button>
    );
}