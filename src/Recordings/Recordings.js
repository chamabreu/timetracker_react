import axios from "axios"
import { useEffect } from "react"


export default function Recordings() {


  useEffect(() => {
    axios.get('http://localhost:5000/api/recordings')
    .then(result => {
      console.log(result)
    })
    
  }, [])



  return (
    

  )
};
