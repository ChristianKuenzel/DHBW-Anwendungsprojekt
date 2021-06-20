import DhbwButton from '../components/Button';
import Searchbar from '../components/Searchbar';
import Texteingabe from '../components/Texteingabe';
import VorlesungHinzufuegenKursplan from '../components/VorlesungHinzufuegenKursplan';

export default function wochenübersicht() {
    return (
        <div>
            <Texteingabe placeholder="eingeben" width="100px" size="sm"/>
            <VorlesungHinzufuegenKursplan />
        </div>
        
        

    );
}