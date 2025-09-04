import React, { useEffect, useState } from 'react';

// SRP (Single Responsibility Principle) Example

interface User {
    name: string;
    id: number;
}

// ❌ Нарушение SRP: компонент отвечает и за загрузку данных, и за рендеринг
// const UserProfile = () => {
//     const [user, setUser] = useState<User | null>(null)
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

// ✅ SRP: Разделение ответственности

// Хук для загрузки пользователя
const useUser = (): User | null => {
    const [user, setUser] = useState<User | null>(null);
    useEffect(() => {
        fetch('api/user')
            .then((res) => res.json())
            .then(setUser);
    }, []);
    return user;
}

// Компонент только для отображения
const UserProfile: React.FC = () => {
    const user = useUser();
    if (!user) {
        return <p>Loading...</p>;
    } else {
        return <div>{user.name}</div>;
    }
}

export default UserProfile;