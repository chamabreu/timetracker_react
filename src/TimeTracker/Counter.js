import { useState } from "react";
import { Container, Button} from "react-bootstrap";

export default function Counter() {
  const [running, setRunning] = useState(false)
  const [timer, setTimer] = useState(0)
  const [timerInterval, setTimerInterval] = useState(null)


  const toggleTimer = () => {
    if (!running) {
      setRunning(true)
      setTimerInterval(setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000))
    }else {
      setRunning(false)
      if (timerInterval) {
        clearInterval(timerInterval)
        setTimerInterval(null)
      }
    }
    
  }

  const resetTimer = () => {
    setRunning(false)
    setTimer(0)
    if (timerInterval) {
      clearInterval(timerInterval)
      setTimerInterval(null)
    }
  }


  return (
    <Container>
      <Button onClick={toggleTimer}>{running ? "Pause" : "Start"}</Button>
      <input type="text" value={timer} />
      <Button onClick={resetTimer}>Reset</Button>

    </Container>
  )
};
