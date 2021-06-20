import Textfeld from '../components/Textfeld';
import Datepicker from '../components/Datepicker';

export default function wochenübersicht() {
    return ( 
        <div>
            <Textfeld />
            <Datepicker placeholderText="Klicken um ein Datum und Uhrzeit anzugeben"/>
        </div>
    )
}

