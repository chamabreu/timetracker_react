import axios from "axios";
import { useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import TaskCounter from "./TaskCounter";
import TaskDetails from "./TaskDetails";



export default function TaskTracker() {
  const [date, setDate] = useState(Date.now())
  const [taskName, setTaskName] = useState("")
  const [taskDescription, setTaskDescription] = useState("")
  const [duration, setDuration] = useState(0)
  const [userMessage, setUserMessage] = useState("")

  const changeTaskName = (e) => {
    setTaskName(e.target.value)
  }

  const changeTaskDescription = (e) => {
    setTaskDescription(e.target.value)
  }


  const saveTask = () => {
    if (taskDescription !== ""
      && taskName !== ""
      && date
      && duration !== 0
    ) {
      setUserMessage("")
      axios.post('http://localhost:5000/api/save',
        {
          taskname: taskName,
          date: date,
          taskdescription: taskDescription,
          duration: duration
        })
        .then(result => {
          console.log(result)
          setUserMessage(result.data)
        })
        .catch(error => console.log('error :>> ', error))
    } else {
      setUserMessage("One Field is Empty, cant Save.")
    }
  }

  const resetAll = () => {
    setDate(Date.now())
    setTaskName("")
    setTaskDescription("")

  }



  return (
    <Container>
      <Row>
        <TaskDetails date={date} changeTaskName={changeTaskName} taskName={taskName} changeTaskDescription={changeTaskDescription} />
      </Row>
      <Row>
        <TaskCounter duration={duration} setDuration={setDuration} />
      </Row>
      <Row>
        <Button onClick={saveTask}>Save</Button>
        <Button onClick={resetAll}>Reset All</Button>
      </Row>
      <Row>
        {userMessage !== "" ? userMessage : null}
      </Row>
    </Container>
  )
};