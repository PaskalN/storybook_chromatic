import React from 'react';
import Button from '../../components/Button/index';
import Decor from '../../components/Decor';

export default {
  title: 'Project/Buttons/Header',
  component: Button,
};

const Template = (args) => (
    <Decor>
        <Button {...args} />
    </Decor>
)

export const LoginButton = Template.bind({});

LoginButton.parameters = {
    design: {
        type: "figma",
        url: "https://www.figma.com/file/xq3XgI75CvGfJjFHsZoclH/Untitled?node-id=6%3A2&t=XOHrgUVuiipnFdWe-0",
    },
}

LoginButton.args = {
    disabled: true,
    innerText: 'Login'
};