import React from "react";
import { Badge, Container, FormControl, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <Navbar
            bg="dark"
            variant="dark"
            style={{
                height: 80,
            }}
        >
            <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className="search">
                    <FormControl
                        style={{
                            width: 500,
                        }}
                        placeholder="Search for Products"
                        className="m-auto"
                    />
                </Navbar.Text>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        <FaShoppingCart color="white" fontSize="25px" />
                        <Badge>{10}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                        style={{
                            minWidth: 370,
                        }}
                    >
                        <span
                            style={{
                                padding: 10,
                            }}
                        >
                            Cart is Empty!
                        </span>
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
};

export default Header;
