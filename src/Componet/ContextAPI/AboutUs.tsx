import { useContext } from "react"
import { data } from "./Home"

const AboutUs = () => {
  const getData= useContext(data)
  console.log("getData", getData);
  
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

export default AboutUs
