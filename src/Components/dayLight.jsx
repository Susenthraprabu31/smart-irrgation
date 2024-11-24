import React from 'react'
import Card from 'react-bootstrap/Card';
import Dntoggle from './dnToggleButton'
function dayLight() {
  return <>
  <Card style={{ width: '18rem' }}>
      <Card.Body>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1330521685/photo/time-change-above-alpine-mountain-meadow-in-summer.jpg?s=612x612&w=0&k=20&c=BbNUfikgTt1dBrTIPJ3UF1N_dQO7tLPYx_JOUHLBMzI=" />
        <Card.Title className='daylight'><h2>DAY LIGHT</h2></Card.Title>
      </Card.Body>
    <Dntoggle/>
    </Card>
  </>
}

export default dayLight