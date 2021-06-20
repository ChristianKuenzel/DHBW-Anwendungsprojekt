import React, { useState } from 'react';
import styled from 'styled-components';
import { Popup } from '../components/Popup';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const Button = styled.button`
    min-width: 50px;
    max-width: 300px;
    padding: 5px 10px;
    border-radius: 100px;
    background: #E3001B;
    color: #fff;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;
`;

function Vorlesungsverzeichnis() {
    const [showPopup, setShowPopup] = useState(false);
  
    const openPopup = () => {
      setShowPopup(prev => !prev);
    };
  
    return (
        <Container>
          <Button onClick={openPopup}>Vorlesung erstellen</Button>
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} />
        </Container>
    );
  }
  
  export default Vorlesungsverzeichnis;