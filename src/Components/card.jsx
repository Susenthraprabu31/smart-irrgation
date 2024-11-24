import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import ToggleButton from 'react-bootstrap/ToggleButton';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
function card() {
  const [value, setValue] = useState([1, 2]);
  const handleChange = (val) => setValue(val);
  return<>
  <div className='cards'>
  <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://www.thespruce.com/thmb/VA7xpXC6WabuEfrZpJIPWVlOPHw=/4206x0/filters:no_upscale():max_bytes(150000):strip_icc()/healthy-soil-and-how-to-make-it-2539853-hero-fdf9b0280dca41cb8ae9614e6fc4a0b0.jpg" />
      <Card.Body>
        <Card.Title>Soil Moisture</Card.Title>
        <Card.Text className='value'>
          Value : 25000
        </Card.Text>
        <h5 className='motor'>Motor</h5>
        <br></br>
        <div className='toggle01'>
        <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
          <ToggleButton id="tbg-btn-1" value={1}>
        ON
      </ToggleButton>
      <ToggleButton id="tbg-btn-2" value={2}>
        OFF
      </ToggleButton>
    </ToggleButtonGroup>
    </div>
      </Card.Body>
    </Card>
    </div>
 </>
}

export default card