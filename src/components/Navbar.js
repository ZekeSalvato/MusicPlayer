import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import NavDropdown from 'react-bootstrap/NavDropdown';

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/home">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link eventKey={2} href="#memes">
                            Tuner
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                        <Nav.Link href="/Allsongs">All Songs</Nav.Link>
                        <NavDropdown title="Profile" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2"> Register
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">My Songs</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Settings
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;