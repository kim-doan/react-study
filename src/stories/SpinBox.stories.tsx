import React from 'react';
import { ComponentStory, ComponentMeta, storiesOf } from '@storybook/react';

import { SpinBox } from './SpinBox';

export default {
    title: 'Example/SpinBox',
    component: SpinBox,
} as ComponentMeta<typeof SpinBox>

const Template: ComponentStory<typeof SpinBox> = (args) => <SpinBox {...args} />;

export const Default = Template.bind({});

Default.args = {
    value: 0
}