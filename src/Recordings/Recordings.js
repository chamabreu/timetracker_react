import axios from "axios"
import { useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import TaskTable from "./TaskTable"


export default function Recordings() {
  const [allRecordings, setAllRecordings] = useState(null)
  const [recordings, setRecordings] = useState([])


  useEffect(() => {
    axios.get('http://localhost:5000/api/recordings')
      .then(result => {
        const recordingsArray = result.data
        recordingsArray.sort((a, b) => { return b.date - a.date })


        if (recordingsArray.length !== 0) {
          setAllRecordings(recordingsArray)
          setRecordings(recordingsArray)
        }
      })
      .catch(error => console.log(error))

  }, [])

  const liveSearch = (e) => {
    const searchEntry = e.target.value.toLowerCase()
    const filteredRecordings = allRecordings.filter(task => {
      let taskDescriptionLC = task.taskdescription.toLowerCase()
      return taskDescriptionLC.includes(searchEntry)
    })
    setRecordings(filteredRecordings)
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
