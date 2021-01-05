import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import Task from "./Task"


export default function Recordings() {
  const [query, setQuery] = useState("")
  const [allRecordings, setAllRecordings] = useState(null)
  const [recordings, setRecordings] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/api/recordings')
      .then(result => {
        const recordingsArray = result.data

        if (recordingsArray.length !== 0) {
          setAllRecordings(recordingsArray)
          setRecordings(recordingsArray)
          console.log(recordingsArray)
        }
      })
      .catch(error => console.log(error))

  }, [])

  const liveSearch = (e) => {
    const searchEntry = e.target.value.toLowerCase()
    setQuery(searchEntry)
    const filteredRecordings = allRecordings.filter(task => {
      let taskDescriptionLC = task.taskdescription.toLowerCase()
      return taskDescriptionLC.includes(searchEntry)
    })
    setRecordings(filteredRecordings)
    console.log(filteredRecordings)
  }


  if (allRecordings) {
    return (
      <Container className="mt-3">
        <Row>
          {allRecordings
            ? <input placeholder="Search Description" onChange={e => liveSearch(e)} />
            : null}
        </Row>
        {recordings.length !== 0
          ? recordings.map(task => {
            return (
              <Row className="mb-2">
                <Task key={task._id} taskName={task.taskname} taskDescription={task.taskdescription} duration={task.duration} date={task.date} />
              </Row>
            )
          })
          : "No Match with " + query
        }
      </Container>

    )
  } else {
    return (
      <Container>
        You have no Tasks recorded
      </Container>
    )
  }

};
