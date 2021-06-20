import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const PopupWrapper = styled.div`
  width: 696px;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  z-index: 10;
  border-radius: 10px;
`;

const PopupContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  h1 {
    text-align: center;
    font-size: 24px;
    font-family: 'Roboto', sans-serif;
    color: #E3001B;
  }
  input {
    border: none;
    border-bottom: 2px solid #E3001B;
    outline: none;
  }
  button {
    margin-top: 5px;
    margin-left: 610px;
    min-width: 20px;
    max-width: 300px;
    padding: 2px 10px;
    border-radius: 50px;
    background: #E3001B;
    opacity: 75%;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
  }
  button:hover {
    opacity: 100%;
  }
  p {
    color: grey;
    font-size: 12px;
    font-family: 'Roboto', sans-serif;
  }
`;

const ClosePopupButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 5px;
  right: 5px;
  color: #E3001B;
  width: 24px;
  height: 24px;
  padding: 0;
  z-index: 10;
`;

export const Popup = ({ showPopup, setShowPopup }) => {
  const PopupRef = useRef();

  const animation = useSpring({
    config: {
      duration: 200
    },
    opacity: showPopup ? 1 : 0,
    transform: showPopup ? `translateY(0%)` : `translateY(-100%)`
  });

  const closePopup = e => {
    if (PopupRef.current === e.target) {
      setShowPopup(false);
    }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showPopup) {
        setShowPopup(false);
      }
    },
    [setShowPopup, showPopup]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );

  return (
    <>
      {showPopup ? (

          <animated.div style={animation}>
            <PopupWrapper showPopup={showPopup}>
              <PopupContent>
                <div>
                  <h1>Vorlesung erstellen</h1>
                  <div>
                    <input id="name" type="text" placeholder="Kursname*" required></input>
                    <input id="dozent" type="text" placeholder="Dozierender"></input>
                    <input id="ects" type="number" placeholder="ECTS*" required></input>
                    <input id="zeit" type="number" placeholder="Zeit in Stunden*" required></input>
                  </div>
                  <button type="submit" onClick={saveInfo}>Erstellen</button>
                  <p>Mit * makierte Felder sind Pflichtfelder und müssen ausgefüllt werden.</p>
                </div>
              </PopupContent>
              <ClosePopupButton
                aria-label='Close Popup'
                onClick={() => setShowPopup(prev => !prev)}
              />
            </PopupWrapper>
          </animated.div>

      ) : null}
    </>
  );
};

function saveInfo() {
  if (document.getElementById("name").value != "" && document.getElementById("ects").value != "" && document.getElementById("zeit").value != "") {
      let name = document.getElementById("name").value;
      let dozent = document.getElementById("dozent").value;
      let ects = document.getElementById("ects").value;
      let zeit = document.getElementById("zeit").value;
      alert(`Dies dient als Test für die Ausgabe der Daten
    Name des Kurses: ${name}
    Dozierender (falls schon bekannt): ${dozent}
    ECTS: ${ects}
    Zeit in Stunden: ${zeit}`)
  } else {
    alert("Es wurden nicht alle Pflichtfelder ausgefüllt");
  }
}