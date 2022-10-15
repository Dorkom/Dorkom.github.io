import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';


const CardCheck = (props) => {


    const { srcimg, product, cost } = props;
    return (
        <Row>
            <Col>
                <img src={srcimg} height="100px"/>
            </Col>
            <Col>{product}</Col>
            <Col>{cost}</Col>
            <Col>
                <Button variant="primary"><img src="./img/trash-can.png" height="60px"/></Button>{' '}
            </Col>
        </Row>
)
}

export default CardCheck;