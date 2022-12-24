import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, language, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} width="100%" height="100%"/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <h3>{language}</h3>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}