import React from 'react';
import '../../assets/scss/app.scss';
import { HeaderConsumer } from '../../contexts';

export default class Decor extends React.Component {
    useDarkmode(use) {
        return use ? 'decorator theme-mode__dark decorator' : 'decorator'
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