import { useEffect, useState, useLayoutEffect } from "react";

export default function LayoutEffect() {
    const [count, setCount] = useState(0)
    
    useLayoutEffect(() => {
        if(count > 3) {
            setCount(0)
        }
        //clean up funtion
    }, [count])

    const handleRun = () => {
        setCount(count + 1)
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleRun} >Run</button>
        </div>
    )
}