import React from 'react';

export default class Button extends React.Component {
    render() {
        const _this = this;

        return (
            <button className='login-button' disabled={_this.props.disabled}>
                <span>{_this.props.innerText}</span>
            </button>
        )
    }
}