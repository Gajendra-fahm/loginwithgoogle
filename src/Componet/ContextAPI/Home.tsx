import React, { createContext, useState } from 'react'
import AboutUs from './AboutUs';

interface DataContextType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }

export const data = createContext<DataContextType |any>(null)
const Home = () => {
    const [value, setValue] = useState<any>("Hello from Context!");
  return (
    <data.Provider value={{value, setValue}}>
       <AboutUs/>
    </data.Provider>
   
  )
}

export default Home
