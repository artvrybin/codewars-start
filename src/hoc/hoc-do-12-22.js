export const HOC = (Component) => {

    return (props) => {
        const auth = useSelector(state => state.auth)
        return (
            <Component {...props} auth={auth}/>
        )
    }
}


const Component = ({auth, title}) => {
    return (
        <>
            <h1>{title}</h1>
            <div>{auth}</div>
        </>
    )
}

const ComponentWithAuth = HOC(Component)

 //   <ComponentWithAuth title= {'sas'} />