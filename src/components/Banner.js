import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Full-Stack Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300-Math.random()*100);
    const period = 2000;

    useEffect(() =>{
        let ticker = setInterval(() =>{
            tick();
        }, delta)
        return () => {clearInterval(ticker)};
    }, [text])

    const tick =()=>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let
    }

    return (
        <section className = "banner" id ="home">
            <Container>
                <Row ClassName ='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Kenthony"}<span className="wrap">Web Developer</span></h1>
                        <p>About Me</p>
                        <butoon onClick={() => console.log('connect')}>Let's connect</butoon>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 