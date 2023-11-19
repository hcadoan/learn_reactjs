import { useEffect, useState } from "react";

const lessons = [
    {
        id: 1,
        name: 'ReactJs la gi?'
    },
    {
        id: 2,
        name: 'SPA/MPA la gi?'
    },
    {
        id: 3,
        name: 'Arrow funtion'
    }
]

export default function ContentFakeChatApp() {
    const [lessonId, setLessonId] = useState()

    useEffect(() => {

        const handleComment = ({ detail }) => {
            console.log(detail)
        }
        
        window.addEventListener(`lesson-${lessonId}`, handleComment)
        //clean up funtion
        return () => {
            window.removeEventListener(`lesson-${lessonId}`, handleComment)
        }
    }, [lessonId])

    return (
        <div>
            <ul>
                {lessons.map(lesson => (
                    <li
                        key={lesson.id}
                        style={{
                            color: lessonId === lesson.id ?
                            'red' : '#333'
                        }}
                        onClick={() => setLessonId(lesson.id)}
                    >
                        {lesson.name}
                    </li>
                ))}
            </ul>
        </div>
    )
}