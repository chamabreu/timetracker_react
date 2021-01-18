import axios from "axios"
import { useState } from "react"

export default function GraphQLTest() {
  const [queryString, setQueryString] = useState("")
  const [queryReturn, setQueryReturn] = useState("")

  const askBackend = () => {
    if (!queryString) {
      console.log("No String")
    }else {
      axios.post('http://localhost:5000/gql', {
        query: `{${queryString}}`
      })
      .then(result => {
        console.log(result.data)
        setQueryReturn(result.data.data[queryString])
      })
      .catch(error => {
        setQueryReturn(error.message)
      })
    }

  }

  return (
    <>
      <h1>This is Graphql</h1>
      <input type="text" placeholder="enter your query" onChange={e => setQueryString(e.target.value)} value={queryString}/>
      <button onClick={askBackend}>Send</button>
      {queryReturn}
    </>
  )
};
