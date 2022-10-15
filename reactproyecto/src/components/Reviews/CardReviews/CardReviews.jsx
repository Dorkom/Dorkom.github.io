import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const CardReviews = (props) => {


    const { nombre, resena } = props;
    return (
        <Row>
            <Card class="border-top">
                <Card.Title>{nombre}</Card.Title>
                <Card.Text>{resena}</Card.Text>
            </Card>
        </Row>
)
}

export default CardReviews;