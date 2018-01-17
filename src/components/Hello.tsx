import * as React from 'react'

export interface HelloProps {
    compile: string;
    framework: string;
}

class Hello extends React.Component<HelloProps> {
    render() {
        return (
            <h1>{`this is ${this.props.compile} and ${this.props.framework}`}</h1>
        )
    }
}

export default Hello
