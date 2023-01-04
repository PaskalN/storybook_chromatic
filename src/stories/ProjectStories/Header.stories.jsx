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

Main.args = {
  foo: false,
  bar: true
};