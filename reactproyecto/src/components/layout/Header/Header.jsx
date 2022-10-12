import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';




import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
// var Typeahead = require('react-bootstrap-typeahead').Typeahead;
import options from './data';
<link
  rel="stylesheet"
  href="https://unpkg.com/react-bootstrap-typeahead/css/Typeahead.css"
/>





const Header = () => {

const [selected, setSelected] = useState([]);

return (
    <Container>
        <Row xs={1}>
            <Col xs={6}>
            <h1>
                <i class="fa fa-gamepad" aria-hidden="true"></i>
                &nbsp;Playstation Store</h1>
            </Col >
            <Col xs={6} className="justify-content-md-right">
            <Nav
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3">Ranking</Nav.Link>
                </Nav.Item>
                <Typeahead
                    id="basic-example"
                    onChange={setSelected}
                    options={options}
                    placeholder="Choose a state..."
                    selected={selected}
                />
                <Form className="d-flex">
                    {/* <Form.Control
                        type="search"
                        placeholder="search"
                        className="me-2"
                        aria-label="Search"
                    /> */}
                    <Button variant="outline-sucess">User</Button>
                    <Button variant="outline-sucess">Carrito</Button>
                </Form>
                </Nav>
            </Col >
        </Row>
    </Container>
)

}

export default Header;