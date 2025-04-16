function MyComponent() {

}

const PolymorphComponent = () => {
    return (
        <div className="Container">
111111111111
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