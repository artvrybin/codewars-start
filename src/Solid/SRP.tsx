import {useEffect, useState} from 'react';

// const userProfile = () => {
//     const [user, setUser] = useState(null)
//     useEffect(() => {
//         fetch('api/user')
//             .then((res) => res.json())
//             .then(setUser)
//     }, [])
//     if (!user) {
//         return <p>Loading...</p>
//     } else {
//         return <div>{user.name}</div>
//     }
// }

//-------------------------------------------------------

const User =() => {
    const [user, setUser] = useState(null)
    useEffect(() => {
        fetch('api/user')
            .then((res) => res.json())
            .then(setUser)
    }, [])
    return user
}

const userProfile = () => {
    const user = User()
    if (!user) {
        return <p>Loading...</p>
    } else {
        return <div>{user.name}</div>
    }
}