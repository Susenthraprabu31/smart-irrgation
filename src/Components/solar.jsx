import React from 'react'
import Card from 'react-bootstrap/Card';
function solar() {
  return <>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://blog.feniceenergy.com/wp-content/uploads/2024/05/how-is-solar-energy-useful-to-us.jpg" />
      <Card.Body>
        <Card.Title><h2>SOLAR</h2></Card.Title>
        <Card.Text>
        <h3 className='volt'>VOLT : 14V</h3>
        </Card.Text>
      </Card.Body>
    </Card>
  </>
}

export default solar