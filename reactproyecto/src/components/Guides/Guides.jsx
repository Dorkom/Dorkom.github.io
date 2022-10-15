import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import StyledDiv from './styles';


const Guides = () => {
    return (
        <Container>
            <Row style={{height: '5rem', backgroundColor:'white'}}>
            </Row>
            <h1>Guides</h1><br/>
                <Container>
                    <Container>
                        <Container>
                            <Container>
                                <Container>
                                    <StyledDiv>
                                        <h3>Build Redux Quick Start Guide</h3>
                                    </StyledDiv>
                                    <StyledDiv>
                                    <h3>System Overview</h3>
                                    </StyledDiv>
                                    <StyledDiv>
                                    <h3>Troubleshooting - Display</h3>
                                    </StyledDiv>
                                    <StyledDiv>
                                    <h3>Reseating Guide - Memory</h3>
                                    </StyledDiv>
                                    <StyledDiv>
                                    <h3>Reseating Guide - Graphics Card</h3>
                                    </StyledDiv>
                                    <StyledDiv>
                                    <h3>Realignment Guide - Rear I/O</h3>
                                    </StyledDiv>
                                </Container>
                            </Container>
                        </Container>
                    </Container>
                </Container>
        </Container>
    )
}

export default Guides