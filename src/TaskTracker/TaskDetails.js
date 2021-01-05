import { Col, Row } from "react-bootstrap";

export default function TaskDetails(props) {


  return (
    <>
      <Row className="mb-2">
        <Col>
          <input className="form-control text-center" readOnly placeholder="DATE.NOW" value={props.date} />
        </Col>
      </Row>
      <Row>
        <Col>
          <input className="form-control mb-2" placeholder="Task Name" onChange={e => props.changeTaskName(e)} value={props.taskName} />
          <textarea className="form-control mb-2" placeholder="DESCRIPTION" onChange={e => props.changeTaskDescription(e)} value={props.taskDescription} />
        </Col>
      </Row>
    </>
  )
};
