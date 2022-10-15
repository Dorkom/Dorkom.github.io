import Card from 'react-bootstrap/Card';
import BsButton from 'react-bootstrap/Button';
import styled from 'styled-components';

const StyledButton = styled(BsButton)`
    background-color: gray;
    --bs-btn-border-color: none;
`


const Types = (props) => {
    const { href, text } = props;
        return (
            <StyledButton href={href} variant="secondary" style={{ width: '20rem', height: '10rem', marginLeft: '4rem' }}>
                <i icon="fa fa-gamepad"></i>
                {text}
            </StyledButton>
            )
}

export default Types

//<Card style={{ width: '20rem', height: '10rem', 'marginLeft': '4rem' }}>
//<Card.Body>
//<i icon="fa fa-gamepad" variant="top"></i>
//&nbsp;
//</Card.Body>
//<h1>
//{text}
//</h1>
//</Card>