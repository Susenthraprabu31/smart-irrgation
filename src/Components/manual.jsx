import React from 'react'
import Card from 'react-bootstrap/Card';
import Toggle from './toggleButton';
function manual() {
  return<>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title className='manual'><h4>MANUAL MODE</h4></Card.Title>
      </Card.Body>
        <Toggle/>
    </Card>
  </>
}

export default manual