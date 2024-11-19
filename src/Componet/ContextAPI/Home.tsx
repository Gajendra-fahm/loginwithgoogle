import React, { createContext, useState } from 'react'
import AboutUs from './AboutUs';

interface DataContextType {
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
  }

export const data = createContext<DataContextType |null>(null)
const Home = () => {
    const [value, setValue] = useState<string>("Hello from Context!");
  return (
    <data.Provider value={{value, setValue}}>
       <AboutUs/>
    </data.Provider>
   
  )
}

export default Home
