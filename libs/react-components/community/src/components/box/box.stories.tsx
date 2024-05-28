import { Controls, Description, Primary, Stories, Subtitle, Title } from '@storybook/addon-docs';
import { Meta, StoryFn, StoryObj } from '@storybook/react';

import { Col, Row } from '../grid';
import Notification from '../notification/notification';
import Text from '../typography/text/text';
import { VerticalSpacing } from '../vertical-spacing';
import Box, { BoxSpec } from './box';

const meta: Meta<BoxSpec> = {
  title: 'Community-components/Box',
  component: Box,
  parameters: {
    docs: {
      page: () => (
        <>
          <Title />
          <Subtitle>Simple flexbox component</Subtitle>
          <Description />
          <p>
            Box should be used where Grid systems rows and cols are unnecessary to minimize written code. For example
            when you need to use flexbox inside Col component you should not create a new row and cols inside it.
          </p>
          <Notification>
            Box should be used where Grid systems rows and cols are unnecessary to minimize written code. For example
            when you need to use flexbox inside Col component you should not create a new row and cols inside it.
          </Notification>
          <Primary />
          <Controls />
          <Stories includePrimary={false} />
        </>
      ),
    },
  },
};

export default meta;
type Story = StoryObj<typeof Box>;

const Template: StoryFn<BoxSpec> = (args) => {
  const getRow = (name: string, rowProps?: Partial<BoxSpec>): JSX.Element => (
    <Row gutterX={5} alignItems="center">
      <Col width={1}>
        <Text color={args.color === 'inverted' ? 'inverted' : undefined}>{name}</Text>
      </Col>
      <Col width="auto">
        <Row>
          <Col width="auto">
            <Box justifyContent="center" alignItems="flex-start" gutter={1} {...args}>
              <div>item1</div>
              <div>item2</div>
            </Box>
          </Col>
        </Row>
      </Col>
    </Row>
  );

  return <VerticalSpacing size={0.5}>{getRow('Default')}</VerticalSpacing>;
};

export const Default: Story = {
  render: Template,
};
