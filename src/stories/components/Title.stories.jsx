import React from 'react';
import { Button } from '../../stories/Button'

// import { Title, Subtitle, Discription, Primary, ArgsTable, Stories, PRIMARY_STORY } from '@storybook/addon-docs/blocks'

import { Title } from './Title';
export default {
  title: 'Common/Title',
  component: Title,
  argsTypes: {
    description: { type: 'radio'}
  },
  subcomponents: {Button},
  // parameters: {
  //   docs: {
  //     page: () => (
  //       <>
  //         <Title />
  //         <Primary />
  //         <ArgsTable />
  //       </>
  //     )
  //   }
  // }
};

const Template = (args) => <Title {...args} />;

export const NoValue = Template.bind({});
// NoValue.parameters = {
//   docs: {
//     page: null
//   }
// }
NoValue.args = {
  title: "Title from StoryBook ",
  description: 'Try 1',
};

export const withValues = Template.bind({});
withValues.args = {
  title: "Title from StoryBook ",
  description: 'Try 1',
};

// import React from 'react';

// import { Title } from './Title';
// export default {
//   title: 'Common/Title',
//   component: Title,
// };

// const Template = (args) => <Title {...args} />;

// export const Primary = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// Primary.args = {
//   title: "Title from StoryBook ",
//   description: 'Button',
// };
