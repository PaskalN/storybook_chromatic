import React from 'react';
import '../../assets/scss/app.scss';
import { HeaderConsumer } from '../../contexts';

export default class Decor extends React.Component {
    static darkmoodClassName = 'theme-mode__dark'

    useDarkmode(use) {
        return use ? 'decorator ' + this.darkmoodClassName : 'decorator' 
    }

    render() {
        const _this = this;

        return (
            <HeaderConsumer>
                {props => {
                    return (
                        <article className={_this.useDarkmode(true)}>
                            {_this.props.children}
                        </article>
                    )
                }}
            </HeaderConsumer>
        )
    };
}