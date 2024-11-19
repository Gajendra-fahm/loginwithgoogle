import { useContext } from "react"
import { data } from "./Home";


const Contextus = () => {
  const getData= useContext(data)

  
  if (!getData) {
    return <p>Context is not available</p>;
  }
  const {value, setValue}=getData
 const handleUpdate=()=>{
  setValue("Hello")
 }
  return (
    <div>
     <p>{value}</p>
      <button onClick={handleUpdate}>Update Value</button>
    </div>
  )
}

export default Contextus
