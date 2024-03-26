import { fn } from '@storybook/test';
import { Toast } from './toast';
import * as Icon from '@storybook/icons'
import { Trash, Warning, WarningCircle } from "@phosphor-icons/react";
// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  // argTypes: {
  //   backgroundColor: { control: 'color' },
  // },
  args: { onClick: fn() },
};

export const Default = {
  args: {
    type: 'default',
    icon: null,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: 'Message Here'
  },
};

export const Notification = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: 'Message Here'
  },
};

export const Full = {
  args: {
    type: '',
    icon: <Trash style={{color:'white', fontSize: 24}}/>,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: 'Message Here'
  },
};

export const WithoutIcon = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: 'Message Here',
  },
};

export const WithoutAction = {
  args: {
    type: '',
    icon: <Trash style={{color:'white', fontSize: 24}}/>,
    swapIcon: '',
    divider: true,
    action: false,
    closeAction: '',
    editText: 'Message Here'
  },
};

export const WithoutDivider = {
  args: {
    type: '',
    icon: <Trash style={{color:'white', fontSize: 24}}/>,
    swapIcon: '',
    divider: false,
    action: '',
    closeAction: '',
    editText: ''
  },
};

export const TextAndIcon = {
  args: {
    type: '',
    icon: <Trash size={24} color='white' />,
    swapIcon: '',
    divider: true,
    action: '',
    closeAction: '',
    editText: 'Message'
  },
};

export const TextOnly = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: true,
    action: '',
    closeAction: '',
    editText: ''
  },
};

export const TextAndCloseAction = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: false,
    action: '',
    closeAction: '',
    editText: ''
  },
};

export const TextAndAction = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: false,
    action: '',
    closeAction: '',
    editText: ''
  },
};

export const ToastInformation = {
  args: {
    type: '',
    icon: <WarningCircle size={24} color="#4077ff" weight="fill" />,
    swapIcon: '',
    divider: true,
    action: '',
    closeAction: '',
    editText: ''
  },
};

export const TextWarning = {
  args: {
    type: '',
    icon: <WarningCircle size={24} color="#FFC500" weight="fill" />,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: ''
  },
};

export const TextError = {
  args: {
    type: '',
    icon: <Warning size={24} color="#f73131" weight="fill" />,
    swapIcon: '',
    divider: true,
    action: true,
    closeAction: '',
    editText: ''
  },
};

export const TextSuccess = {
  args: {
    type: '',
    icon: null,
    swapIcon: '',
    divider: true,
    action: '',
    closeAction: '',
    editText: ''
  },
};