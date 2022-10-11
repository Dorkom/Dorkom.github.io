import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Header = () => {
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
                <Form className="d-flex">
                    <Form.Control
                        type="search"
                        placeholder="search"
                        className="me-2"
                        aria-label="Search"
                    />
                    {/* <Button variant="outline-sucess"><img src="img/user.png" alt="theuser" onClick={this.myfunction} /></Button> */}
                    <Button variant="outline-sucess">Carrito</Button>
                </Form>
                </Nav>
            </Col >
        </Row>
    </Container>
)

}

export default Header;