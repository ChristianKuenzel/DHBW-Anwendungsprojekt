
import dropdown from '../styles/DropdownMenu.module.css';

   

export default function Dropdown() {
    return (
        <select className={dropdown.container}>
          <option className={dropdown.items} selected value="1">Item 1</option>
          <option className={dropdown.items} value="2">Item 2</option>
          <option className={dropdown.itesm} value="3">Item 3</option>
          <option className={dropdown.items} value="4">Item 4</option>
          <option className={dropdown.items} value="5">Item 5</option>
          <option className={dropdown.items} value="6">Item 6</option>
          <option className={dropdown.items} value="7">Item 7</option>
        </select>
        
        
    );
}
