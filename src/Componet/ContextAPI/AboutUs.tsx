import  { useContext } from 'react'
import {data} from "./Home"
const AboutUs = () => {
    const getValue = useContext(data);

    if (!getValue) {
        return <p>Context is not available</p>; // Handle null case if needed
      }
    
   const {value, setValue }= getValue

   const handleUpdate = () => {
    setValue("Updated Context Value!");
  };
    
  return (
    <div>
      <p>{value}</p>
      <button onClick={handleUpdate}>Update Value</button>
    </div>
  )
}

export default AboutUs
