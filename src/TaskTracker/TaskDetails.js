
export default function TaskDetails(props) {


  return (
    <>
      <input readOnly placeholder="DATE.NOW" value={props.date} />
      <input placeholder="Task Name" onChange={e => props.changeTaskName(e)} value={props.taskName} />
      <textarea placeholder="DESCRIPTION" onChange={e => props.changeTaskDescription(e)} value={props.taskDescription}/>
    </>
  )
};
