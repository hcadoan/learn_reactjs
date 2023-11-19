import { useRef } from "react";
import Video from "./video";

// phát, tạm dừng video

export default function UseImperativeHandle () {

    const videoRef = useRef()

    const handlePlay = () => {
        videoRef.current.play()
    }

    const handlePause = () => {
        videoRef.current.pause()
    }

    return (
        <div>
            <Video ref={videoRef}/>
            <button onClick={handlePlay} >Play</button>
            <button onClick={handlePause} >Pause</button>
        </div>
    )
}