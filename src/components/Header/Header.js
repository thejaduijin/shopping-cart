import React from 'react'
import { Container, FormControl, Navbar } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" style={{
            height: 80
        }}>
            <Container>
                <Navbar.Brand>
                    <a href='/'>Shopping Cart</a>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{
                        width: 500
                    }} placeholder="Search for Products" className='m-auto' />
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    )
}

export default Header

