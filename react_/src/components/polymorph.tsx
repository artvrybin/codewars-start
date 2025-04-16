import {ComponentPropsWithoutRef, ElementType} from 'react';

type MyComponentProps<T extends ElementType> = {
    tag?: T
} & ComponentPropsWithoutRef<T>

function MyComponent<T extends ElementType>({tag, children, ...props}: MyComponentProps<T>) {
    const Component = tag || 'div'
    return (
        <Component {...props}>{children}</Component>
    )
}


const PolymorphComponent = () => {
    return (
        <div className="Container">

            <MyComponent tag={'a'} href={'https://google.com'}>
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