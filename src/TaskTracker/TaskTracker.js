import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import TaskCounter from "./TaskCounter";
import TaskDetails from "./TaskDetails";



export default function TaskTracker() {
  /* TASK DETAILS STATES */
  const [date, setDate] = useState(0)
  const [readableDate, setReadableDate] = useState("")
  const [dateTimer, setDateTimer] = useState(null)
  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")

  /* COUNTER STATES */
  /* Running state to keep track if the counter is running */
  const [running, setRunning] = useState(false)
  /* the timer initiated with date.now */
  const [timer, setTimer] = useState(0)
  const [startTime, setStartTime] = useState(0)
  /* the timerinterval to prevent a double existing interval */
  const [timerInterval, setTimerInterval] = useState(null)
  /* the formatted time from the timer in format hh:mm:ss as string - this gets the user as UI */
  const [formattedTime, setformattedTime] = useState("")

  /* UI STATE */
  const [userMessage, setUserMessage] = useState("")



  /* TASK DETAILS FUNCTIONS */
  const changeTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const changeTaskDescription = (e) => {
    setTaskDescription(e.target.value)
  }

  useEffect(() => {
    if (!dateTimer) {
      setDateTimer(setInterval(() => {
        setDate(Date.now())
      }, 1000))
    }
  }, [dateTimer])

  useEffect(() => {
    setReadableDate(new Date(date).toLocaleString())
  }, [date])


  const saveTask = () => {
    if (taskDescription !== ""
      && taskName !== ""
      && date
    ) {
      setUserMessage("Saving...")
      axios.post('http://localhost:5000/api/save',
        {
          taskname: taskName,
          date: date,
          taskdescription: taskDescription,
          duration: timer
        })
        .then(result => {
          console.log(result)
          setUserMessage(result.data)
          resetAll()
        })
        .catch(error => {
          if (error.message) {
            setUserMessage(error.message)
          } else {
            setUserMessage("Unknown Error")
          }
        })
    } else {
      setUserMessage("One or more Field(s) are Empty, can't Save.")
    }
  }





  /* COUNTER HANDLER */
  /* Start/Pause Button toggles the timer */
  const toggleTimer = () => {
    /* If no Timer running */
    if (!running) {
      if (timer === 0) {
        /* Set it running */
        setRunning(true)
        /* set the Starttime */
        setStartTime(Date.now())
        /* After this, the useEffect Hook sets the interval with the correct value */
      } else {
        setRunning(true)
        setStartTime(Date.now() - timer)
      }

    } else {
      /* if a timerinterval exists - delete it */
      if (timerInterval) {
        /* set running false */
        setRunning(false)
        clearInterval(timerInterval)
        setTimerInterval(null)
      }
    }
  }

  /* This gets called if the startTime is updated and is not 0 (Default value) */
  useEffect(() => {
    if (startTime !== 0) {
      setTimerInterval(setInterval(() => {
        setTimer(Date.now() - startTime)
      }, 1000))
    }
  }, [startTime])

  /* Reset Button */
  const resetTimer = () => {
    /* stop timer */
    setRunning(false)
    /* set it back */
    setTimer(0)
    /* Set Starttime back to 0 */
    setStartTime(0)
    /* if a timerinterval exists - delete it */
    if (timerInterval) {
      clearInterval(timerInterval)
      setTimerInterval(null)
    }
  }

  /* a useffect which depends on the timer state */
  useEffect(() => {
    /* set the formatted Time for UI with the seconds from the timer */
    setformattedTime(new Date(timer).toISOString().substr(11, 8))
  }, [timer])





  /* UI HANDLER */
  const resetAll = () => {
    setDate(Date.now())
    setTaskName("")
    setTaskDescription("")
    resetTimer()

  }



  return (
    <Container className="style-box">
      <TaskDetails date={readableDate} changeTaskName={changeTaskName} taskName={taskName} changeTaskDescription={changeTaskDescription} taskDescription={taskDescription} />
      <TaskCounter
        timer={timer}
        setTimer={setTimer}
        toggleTimer={toggleTimer}
        running={running}
        formattedTime={formattedTime}
        resetTimer={resetTimer}
      />
      <Row className="justify-content-center mb-3">
        <Button className="save-button" onClick={saveTask}>Save</Button>
        <Button className="reset-all-button" variant="danger" onClick={resetAll}>Reset All</Button>
      </Row>
      <Row className="mb-3 justify-content-center">
        {userMessage !== "" ? userMessage : "Enter Task Name and Description"}
      </Row>
    </Container>
  )
};
