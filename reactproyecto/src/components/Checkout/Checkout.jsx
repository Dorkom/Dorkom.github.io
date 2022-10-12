import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Checkout = () => {

return (
    <Container>
        <Row xs="auto">
            <Col>
            <h3>
                Shopping car items
            </h3>
            </Col>
        </Row>
        {/* <Row>
            <Col>
            <Card>
                <Table responsive>
                    <thead>
                        <tr>
                            <th>Shopping car items</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>

                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Card>
            </Col>
        </Row> */}
        <Row>
            <Col>
                <img src="./img/keyboard1.png" height="100px"/>
            </Col>
            <Col>Keyboard & mouse bundle</Col>
            <Col>$39</Col>
            <Col>
                <img src="./img/trash-can.png" height="60px"/>
            </Col>
        </Row>
    </Container>
)
}

export default Checkout;