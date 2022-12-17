import { Container, Row, Col} from "react-bootstrap"

export const Banner = () => {
    return (
        <section className = "banner" id ="home">
            <Container>
                <Row ClassName ='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Kenthony"}<span className="wrap">Web Developer</span></h1>
                        <butoon onClick={() => console.log('connect')}>Let's connect</butoon>
                    </Col>
                </Row>
            </Container>

        </section>
    )
} 