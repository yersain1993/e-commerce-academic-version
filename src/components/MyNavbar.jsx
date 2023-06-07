import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'

const MyNavbar = ({ openCart, logout }) => {
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    Ecommerce
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            as={Link}
                            to="/purchases"
                        >
                            Purchases
                        </Nav.Link>
                        <Nav.Link onClick={openCart}>
                            Cart
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            to="/login"
                        >
                            Login
                        </Nav.Link>
                        <Nav.Link
                            onClick={logout}
                        >
                            Logout
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar