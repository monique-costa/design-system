import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputRootProps } from './TextInput';
import { Envelope } from 'phosphor-react';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder="Type your email address here" />
        ],
    }
} as Meta<TextInputRootProps>;

export const Default: StoryObj<TextInputRootProps> = {
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
};

export const NoIcon: StoryObj<TextInputRootProps> = {
    args: {
        children: [
            <TextInput.Input placeholder="Type your email address here" />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
}