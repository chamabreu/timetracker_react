import { Col, Row } from "react-bootstrap"

export default function Task(props) {
  return (
    <>
      <Col>

        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2>{props.taskName}</h2>
          <span>
            {props.duration}
          </span>
          {props.taskDescription}
          <span>
            {props.date}
          </span>
        </div>
      </Col>
    </>
  )
};
