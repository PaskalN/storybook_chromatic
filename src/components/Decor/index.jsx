import React from 'react';
import '../../assets/scss/app.scss';
import { HeaderConsumer } from '../../contexts';

export default class Decor extends React.Component {
    static darkmoodClassName = 'theme-mode__dark'

    render() {
        const _this = this;

        return (
            <HeaderConsumer>
                {props => {
                    return (
                        <article className='decorator'>
                            {_this.props.children}
                        </article>
                    )
                }}
            </HeaderConsumer>
        )
    };
}