import React, { createContext, useState } from 'react'
import Contextus from './Contectus';




interface DataContextType {
    value: any;
    setValue: React.Dispatch<React.SetStateAction<any>>;
  }

export const data= createContext< DataContextType| null>(null)
const Home = () => {
    const [value, setValue] = useState<string>("Hello from Context!");
  return (
    <data.Provider value={{value, setValue}}>
       <Contextus/>
    </data.Provider>
   
  )
}

export default Home
