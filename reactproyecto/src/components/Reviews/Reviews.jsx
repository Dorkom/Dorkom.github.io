import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import CardReviews from './CardReviews';

const Reviews = () => {

const data = [{
    nombre: "Jhon Doe",
    resena: "Great service."
},{
    nombre: "Carl Johnson",
    resena: "Pc well builded and nice case quality."
},{
    nombre: "Jhon Doe",
    resena: "Great service."
},{
    nombre: "Carl Johnson",
    resena: "Pc well builded and nice case quality."
}]

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
            <CardReviews {...data[0]}/>
            <CardReviews nombre={data[1].nombre} resena={data[1].resena}/>
            <CardReviews {...data[2]}/>
            <CardReviews {...data[3]}/>
        </Row>
        {/* <Row>
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
        </Row> */}
    </Container>
)
}

export default Reviews;