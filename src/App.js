import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import DragItem from './Dragula';

function Todo({ title }) {
  const [cards, setCards] = useState([]);
  const [newCardText, setNewCardText] = useState('');

  const addCard = () => {
    if (newCardText.trim() !== '') {
      setCards([...cards, { id: Date.now(), text: newCardText }]);
      setNewCardText('');
    }
  };

  const handleInputChange = (e) => {
    setNewCardText(e.target.value);
  };

  return (
    <div className="column">
      <Container>
      <Row>
        <Col className="Pending" sm={5}>
          Pending
          <h2>{title}</h2>
          {cards.map((card) => (
          <div key={card.id} DragItem className="card">
          {card.text}
          </div>
          ))}
          <input
          type="text"
          placeholder="Enter card text"
          value={newCardText}
          onChange={handleInputChange}
          />
          <button onClick={addCard}>Add Card</button>
        </Col>
        <Col className="Done" sm={5}>
          Done
        </Col>
      </Row>
    </Container>
      
    </div>
  );
}

export default Todo;