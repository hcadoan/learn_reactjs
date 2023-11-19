import { useEffect, useState } from "react";

export default function CountDown() {
    const [countDown, setCountDown] = useState(180)

    useEffect(() => {
        const timerId = setInterval(() => {
            setCountDown(prevState => prevState - 1)
            console.log('countDown')
        }, 1000)

        //clean up funtion
        return () => clearInterval(timerId)
    }, [])

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )
}