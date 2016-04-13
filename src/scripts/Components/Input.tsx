import * as React from 'react';

export default class Input extends React.Component<void, {arr: number[]}> {
    state;

    constructor(props, context) {
        super(props, context);

        let i = 0;
        const arr = [];
        while (i < 500) {
            arr.push(i);
            i++;
        }

        this.state = {arr: arr};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log('Click', this.state);
    }

    render() {
        return <div>
            {this.state.arr.map(item => {
                return <div key={item} onClick={this.handleClick}>{item}</div>;
            })}
        </div>;
    }
}