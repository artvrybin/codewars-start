import React from 'react';

// OCP (Open/Closed Principle) Example

interface CardProps {
    title: string;
    content: string;
    className: string;
}

interface CardContentProps {
    title: string;
    content: string;
}

// ❌ Нарушение OCP: для добавления нового типа нужно модифицировать компонент
// const Card = ({title, content, type}: {title: string, content: string, type: string}) => {
//     return (
//         <div className={
//             type === 'primary' ?
//                 'bg-blue-500 text-white' :
//                 'bg-gray-300 text-black'
//         }>
//             <h2>{title}</h2>
//             <p>{content}</p>
//         </div>
//     )
// }

//-----------------------------------------------------------

// ✅ OCP: Открыт для расширения, закрыт для модификации

// Базовый компонент (закрыт для модификации)
const Card: React.FC<CardProps> = ({title, content, className}) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    );
}

// Расширения (открыты для добавления новых типов)
const CardPrimary: React.FC<CardContentProps> = ({title, content}) => {
    return <Card title={title} content={content} className={'bg-blue-500 text-white'}/>;
}

const CardSecondary: React.FC<CardContentProps> = ({title, content}) => {
    return <Card title={title} content={content} className={'bg-gray-300 text-black'}/>;
}

// Легко добавить новые типы без изменения базового Card
const CardSuccess: React.FC<CardContentProps> = ({title, content}) => {
    return <Card title={title} content={content} className={'bg-green-500 text-white'}/>;
}

export { Card, CardPrimary, CardSecondary, CardSuccess };