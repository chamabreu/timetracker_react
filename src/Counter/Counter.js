/* IMPORTS */
import { useEffect, useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";

/* COUNTER COMPONENT */
export default function Counter() {
  /* States */
  /* Running state to keep track if the counter is running */
  const [running, setRunning] = useState(false)
  /* the timer in seconds */
  const [timer, setTimer] = useState(0)
  /* the timerinterval to prevent a double existing interval */
  const [timerInterval, setTimerInterval] = useState(null)
  /* the formatted time from the timer in format hh:mm:ss as string - this gets the user as UI */
  const [formattedTime, setformattedTime] = useState("")


  /* Start/Pause Button toggles the timer */
  const toggleTimer = () => {
    /* If no Timer running */
    if (!running) {
      /* Set it running */
      setRunning(true)
      /* set a interval */
      setTimerInterval(setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000))
    } else {
      /* set it false */
      setRunning(false)
      /* if a timerinterval exists - delete it */
      if (timerInterval) {
        clearInterval(timerInterval)
        setTimerInterval(null)
      }
    }

  }

  /* Reset Button */
  const resetTimer = () => {
    /* stop timer */
    setRunning(false)
    /* set it back */
    setTimer(0)
    /* if a timerinterval exists - delete it */
    if (timerInterval) {
      clearInterval(timerInterval)
      setTimerInterval(null)
    }
  }

  /* a useffect which depends on the timer state */
  useEffect(() => {
    /* set the formatted Time for UI with the seconds from the timer */
    setformattedTime(new Date(timer * 1000).toISOString().substr(11, 8))
  }, [timer])

  /* Render the components */
  return (
    <Container className="style-box">
      <Row className="justify-content-center">
        <h2>A Simple Counter</h2>
      </Row>
      <Row className="justify-content-center">
        <Col className="d-flex justify-content-end">
          <Button className="resume-counter" onClick={toggleTimer}>
            {running
              ?
              "Pause"
              :
              (timer !== 0)
                ? "Resume"
                :
                "Start"}
          </Button>
        </Col>
        <Col className="justify-content-center">
          <input className="form-control" readOnly type="text" value={formattedTime} />
        </Col>
        <Col className="d-flex justify-content-start">
          <Button className="reset-counter" variant="danger" onClick={resetTimer}>Reset</Button>
        </Col>
      </Row>

    </Container>
  )
};
