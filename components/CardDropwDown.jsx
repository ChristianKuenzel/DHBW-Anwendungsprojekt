
// Komponenten Klasse für ein Erweitertes DropDown Menu bisher funktioniert die Umschaltfunktion noch nicht

import React, { Component } from 'react';
import style from '../styles/DropdownMenu.module.css';

export default class Card extends Component {
  constructor() {
    super();
    
    this.state = {
      showMenu: false,
    };
    
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  showMenu(event) {
    event.preventDefault();
    
    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.showMenu);
    });
  }
  
  closeMenu(event) {
    
    if (!this.dropdownMenu.contains(event.target)) {
      
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });  
      
    }
  }

  render() {
    return (
      <div>
        <button className={style.dropdown} onClick={this.showMenu}>
          Show menu
        </button>
        
        {
          this.state.showMenu
            ? (
              <div className={style.menu}
                ref={(element) => {
                  this.dropdownMenu = element;
                }}
              >
                <button className={style.item}> Menu item 1 </button>
                <button className={style.item}> Menu item 2 </button>
                <button className={style.item}> Menu item 3 </button>
              </div>
            )
            : (
              null
            )
        }
      </div>
    );
  }
}

