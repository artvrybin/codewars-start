function MyComponent() {

}

const PolymorphComponent = () => {
    return (
        <div className="Container">

            <MyComponent tag={'a'} href={'http://google.com'}>
                I am link
            </MyComponent>

            <MyComponent tag={'button'} type={'submit'}>
                I am submit button
            </MyComponent>

            <MyComponent>
                I am div
            </MyComponent>

        </div>
    );
};

export default PolymorphComponent;