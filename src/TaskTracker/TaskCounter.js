/* IMPORTS */
import { Button, Row, Col } from "react-bootstrap";

/* COUNTER COMPONENT */
export default function TaskCounter(props) {
  /* Render the components */
  return (
    <Row className="justify-content-center mb-3">
      <Col className="d-flex justify-content-end">
        <Button className="resume-counter" onClick={props.toggleTimer}>
          {props.running
            ? "Pause"
            : (props.timer !== 0)
              ? "Resume"
              : "Start"}
        </Button>
      </Col>
      <Col className="justify-content-center">
        <input className="form-control" readOnly type="text" value={props.formattedTime} />
      </Col>
      <Col className="d-flex justify-content-start">
        <Button className="reset-counter" variant="danger" onClick={props.resetTimer}>Reset</Button>
      </Col>
    </Row>
  )
};
