import { Table } from "react-bootstrap"

export default function TaskTable(props) {


  const convertTimeFormat = (timeStamp) => {
    return new Date(timeStamp).toLocaleString()
  }

  const convertDuration = (duration) => {
    return new Date(duration).toISOString().substr(11, 8)

  }

  const fillWithRecords = () => {

    return (
      <>
        {props.recordings.map(task => {
          return (
            <tr key={task._id}>
              <td>
                {task.taskname}
              </td>
              <td>
                {convertDuration(task.duration)}
              </td>
              <td>
                {task.taskdescription}
              </td>
              <td>
                {convertTimeFormat(task.date)}
              </td>
            </tr>
          )
        })}
      </>
    )
  }

  if (props.recordings.length !== 0) {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Task </th>
            <th>Duration (hh:mm:ss)</th>
            <th>Description</th>
            <th>Completed On</th>
          </tr>
        </thead>
        <tbody>
          {fillWithRecords()}
        </tbody>
      </Table>
    )

  } else {
    return <h4>Found Nothing</h4>
  }

};
