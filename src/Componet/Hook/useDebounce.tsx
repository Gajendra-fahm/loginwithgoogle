import { useEffect, useState } from "react"


const useDebounce =<T,> (value:T, delay:number) => {
    const[debouncedValue, setDebouncedValue]= useState<T>(value)

    useEffect(()=>{
        const handleTime = setTimeout(()=>{
            setDebouncedValue(value)
        }, delay)

        return ()=>{
            clearTimeout(handleTime)
        }
    }, [value, delay])

    return debouncedValue
}

export default useDebounce
