import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand><NavLink className="fw-bolder text-info" to="/home">OnlineEdu</NavLink></Navbar.Brand>
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/home">Home</NavLink>
                        <NavLink className="nav-link" to="/courses">Courses</NavLink>
                        <NavLink className="nav-link" to="/about">About Us</NavLink>
                        <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;