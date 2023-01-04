import React from 'react';
import PropTypes from 'prop-types';
// Context
import { HeaderConsumer } from '../../contexts';

// Components
import Decor from '../Decor';
import Button from '../Button';

class Header extends React.Component {

    constructor(props) {
        super(props);

        const _this = this;
        this.state = {
            show: false,
            foo: _this.props.foo
        };
    }

    foo() {
        alert();
    }

    render() {
        const _this = this;

        return (
            <HeaderConsumer>
                {props => {

                    console.log(props)

                    return (
                        <Decor>
                            <header onClick={_this.foo}>
                                <Button />
        
                                {_this.props.foo}
        
                            </header>
                        </Decor>
                    )
                }}
            </HeaderConsumer>
        )
    }
}

Header.propTypes = {
    size: PropTypes.oneOf(['small', 'medium', 'large']),
}

export default Header