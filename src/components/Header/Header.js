import React from "react";
import { Badge, Container, FormControl, Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import { AiFillDelete } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartState } from '../Context/Context'
import '../css/styles.css';

const Header = () => {
    const { state: { cart }, dispatch } = CartState();

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
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                        style={{
                            minWidth: 370,
                        }}
                    >
                        {cart.length > 0 ? (
                            <>
                                {cart.map((prod) => (
                                    <span className="cartItem" ket={prod.id}>
                                        <img
                                            src={prod.image}
                                            alt={prod.name}
                                            className="cartItemImg" />
                                        <div className="cartItemDetail">
                                            <span>{prod.name}</span>
                                            <span>₹ {prod.price.split(".")[0]}</span>
                                        </div>
                                        <AiFillDelete
                                            fontSize="20px"
                                            style={{ cursor: "pointer" }}
                                            onClick={() =>
                                                dispatch({
                                                    type: "REMOVE_FROM_CART",
                                                    payload: prod,
                                                })
                                            }
                                        />
                                    </span>
                                ))}
                            </>
                        ) : (
                            <span
                                style={{
                                    padding: 10,
                                }}
                            >
                                Cart is Empty!
                            </span>)}
                    </Dropdown.Menu>
                </Dropdown>
            </Container>
        </Navbar>
    );
};

export default Header;
