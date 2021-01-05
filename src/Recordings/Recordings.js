import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row, Table } from "react-bootstrap"
import TaskTable from "./TaskTable"
import Task from "./TaskTable"


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
        <Row className="justify-content-center">
          <h2>Your Recordings</h2>
        </Row>
        <Row>
          {allRecordings
            ? <input className="form-control mt-2 mb-2" placeholder="Search Description" onChange={e => liveSearch(e)} />
            : null}
        </Row>
        <Row>
          <TaskTable recordings={recordings} />

        </Row>

      </Container >
    )
  } else {
    return (
      <Container className="mt-3">
        <Row className="justify-content-center">
          <h4>You have no Tasks recorded</h4>
        </Row>
      </Container>
    )
  }

};
