import React from 'react';
import Header from '../../components/Header/index';

import { HeaderProvider } from '../../contexts';

export default {
  title: 'Layouts/Header',
  component: Header,

  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
};

const Template = (args) => (<HeaderProvider value={args} ><Header {...args} /></HeaderProvider>)


export const Main = Template.bind({});

Main.parameters = {
  design: {
    type: "figma",
    url: "https://www.figma.com/file/xq3XgI75CvGfJjFHsZoclH/Untitled?node-id=6%3A2&t=XOHrgUVuiipnFdWe-0",
  },
}

Main.args = {
  foo: false,
  bar: true
};