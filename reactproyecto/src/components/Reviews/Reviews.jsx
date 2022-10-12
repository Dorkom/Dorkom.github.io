import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Reviews = () => {

return (
    <Container>
        <Row xs="auto">
            <Col>
            <h3>
                User Reviews
            </h3>
            </Col>
        </Row>
        <Row xs="auto">
            <Col><h4>Global rate</h4></Col>
            <Col><img src="./img/star.png" height="30px"/></Col>
            <Col><img src="./img/star.png" height="30px"/></Col>
            <Col><img src="./img/star.png" height="30px"/></Col>
            <Col><img src="./img/star.png" height="30px"/></Col>
            <Col><img src="./img/star.png" height="30px"/></Col>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Juan Lopez</Card.Title>
                <Card.Text>I completely recomend this service.</Card.Text>
            </Card>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Jhon Doe</Card.Title>
                <Card.Text>Great service.</Card.Text>
            </Card>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Carl Johnson</Card.Title>
                <Card.Text>Pc well builded and nice case quality.</Card.Text>
            </Card>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Juan Lopez</Card.Title>
                <Card.Text>I completely recomend this service.</Card.Text>
            </Card>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Jhon Doe</Card.Title>
                <Card.Text>Great service.</Card.Text>
            </Card>
        </Row>
        <Row>
            <Card class="border-top">
                <Card.Title>Carl Johnson</Card.Title>
                <Card.Text>Pc well builded and nice case quality.</Card.Text>
            </Card>
        </Row>
    </Container>
)
}

export default Reviews;