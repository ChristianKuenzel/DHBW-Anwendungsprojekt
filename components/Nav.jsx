import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href="/">Start</Link>
                </li>
                <li>
                    <Link href="/wochenuebersicht">Wochenübersicht</Link>
                </li>
                <li>
                    <Link href="/kalender">Kalender</Link>
                </li>
                <li>
                    <Link href="/kursplan">Kursplan</Link>
                </li>
                <li>
                    <Link href="/vorlesungsverzeichnis">Vorlesungsverzeichnis</Link>
                </li>
                <li>
                    <Link href="/kontakte">Kontakte</Link>
                </li>
                <li>
                    <Link href="/leistungen">Leistungen</Link>
                </li>
                <li>
                    <Link href="/konto">Login/Konto</Link>
                </li>
                <li>
                    <Link href="/hilfe">Hilfe</Link>
                </li>
                <li>
                    <Link href="/einstellungen">Einstellungen</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;