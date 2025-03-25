import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { Container, Navbar, Nav } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <Navbar bg='dark' variant='dark' fixed='top'>
            <Container>
                <Navbar.Brand as={Link} to='/'>Book</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav'></Navbar.Toggle>
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <Nav.Link as={Link} to='/'>Home</Nav.Link>
                        {/* <Nav.Link as={Link} to='/book'>Book</Nav.Link> */}
                        <Nav.Link as={Link} to='/cart'>Cart</Nav.Link>
                        {/* <Nav.Link as={Link} to='*'>NotFound</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Home