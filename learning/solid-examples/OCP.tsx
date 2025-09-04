// const Card = ({title, content, type}) => {
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
//
// <Card title={'Hello'} content={'content primary'} type={'primary'}/>
// <Card title={'Hi'} content={'content secondary'} type={'secondary'}/>

//-----------------------------------------------------------

const Card = ({title, content, className}) => {
    return (
        <div className={className}>
            <h2>{title}</h2>
            <p>{content}</p>
        </div>
    )
}

const CardPrimary = ({title, content}) => {
    return <Card title={title} content={content} className={'bg-blue-500 text-white'}/>
}
const CardSecondary = ({title, content}) => {
    return <Card title={title} content={content} className={'bg-gray-300 text-black'}/>
}

// <CardPrimary title={'Hello'} content={'content primary'}/>
// <CardSecondary title={'Hi'} content={'content secondary'}/>