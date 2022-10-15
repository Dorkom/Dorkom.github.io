import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';



//esto es para usar typeahead
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
                // activeKey="/"
                // onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="about">About</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="support">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="reviews">Reviews</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="ranking">Ranking</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="vendedores">Vendedores</Nav.Link>
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
                    <Button variant="outline-sucess" href="login"><img src="./img/user.png" height="30px"/></Button>
                    <Button variant="outline-sucess" href="checkout"><img src="./img/shopping-cart.png" height="30px"/></Button>
                    {/* <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '} */}
                </Form>
                </Nav>
            </Col >
        </Row>
    </Container>
)

}

export default Header;