import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';

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
        let updatedText = isDeleting ? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1)
        setText(updatedText)
        if (isDeleting){
            setDelta(prevDelta => prevDelta/2)
        }
        if (!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }
    }

    return (
        <section className = "banner" id ="home">
            <Container>
                <Row ClassName ='align-items-center'>
                    <Col xs={12} md={6} xl={7} >
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Kenthony "}<span className="wrap">{text}</span></h1>
                        <p>About Me</p>
                        <form>
                            <button class="btn" type="submit" formaction='#connect' >Let’s Connect <ArrowRightCircle size={25} /></button>
                        </form>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                                <img src={headerImg} height = "550px" alt="Header Img"/>
                            </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 