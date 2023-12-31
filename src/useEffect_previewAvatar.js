import { useEffect, useState } from "react";

export default function ContentPreviewAvatar() {
    const [avatar, setAvatar] = useState()

    useEffect(() => {
        

        //clean up funtion
        return () => {
            avatar && URL.revokeObjectURL(avatar.preview)
        }
    }, [avatar])

    const handlePreviewAvatar = (e) => {
        const file = e.target.files[0]

        file.preview = URL.createObjectURL(file)

        setAvatar(file)
    }

    return (
        <div>
            <input
                type="file"
                onChange={handlePreviewAvatar}
            />
            {
                avatar && (
                    <img src={avatar.preview} alt="image" width="80%"/>
                )
            }
        </div>
    )
}