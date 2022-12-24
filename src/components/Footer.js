import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon" id="social-icons">
            <a href="https://github.com/KenthonyGarcia"><img src={navIcon1} alt="" /></a>
                <a href="https://www.linkedin.com/in/kenthony-garcia-a6137177/"><img src={navIcon2} alt="" /></a>
                <a href="https://devpost.com/KenthonyGarcia?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"><img src={navIcon3} alt="" /></a>
            </div>
            <p>Copyright 2022. All Rights Reserved. Banner image is drawn by @Duhuhu</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}