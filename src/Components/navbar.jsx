import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function navbar() {
  return <>
  <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='dashboard'>DASHBOARD</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className='smartirrgation'>
            SMART IRRGATION AUTOMATION
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </>
}

export default navbar