// 1. useEffect(callback) => gọi lại callback mỗi khi componets mounted
// 2. useEffect(callback, []) => chỉ gọi callback 1 lần mỗi khi componets mounted
// 3. useEffect(callback, [deps]) => khi deps thay đổi thì callback mới được gọi lại
import { useEffect, useState } from "react";

const tabs = ['posts', 'comments', 'albums']

export default function ContentUseEffect() {
    const [type, setType] = useState('posts')
    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
             })
    }, [type])

    useEffect( () => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                
            }
        }
    })

    return (
        <div>
            {tabs.map(tab => (
                <button 
                    key={tab}
                    style={type === tab ? {
                        backgroundColor: '#333',
                        color: '#fff'
                    } : {}}  
                    onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            {posts.map(post => (
                <li key={post.id}>{post.title || post.name}</li>
            ))}
        </div>
    )
}