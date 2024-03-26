import React from 'react';
import PropTypes from 'prop-types';

import './header.css';
import { Button } from './Button';
import { IconItem, IconGallery } from '@storybook/blocks';
import './toast.css'
import * as Icon from '@storybook/icons'


export const Toast = ({ editText = '', icon: NewIcon = null, action = true, divider = true, onClick = () => { } }) => (
    <div style={{
        display: "flex",
        justifyContent: 'space-between',
        height: 48,
        width: '25vw',
        alignItems: 'center',
        backgroundColor: '#282829',
        padding: '12px',
        position: "absolute",
        bottom: 0,
        left: '50%',
        borderRadius: 8
    }}>
        <div style={{ display: "flex", alignItems: 'center' }}>
            {NewIcon && NewIcon}
            <h2 style={{ color: "white", fontFamily: 'Nunito Sans', paddingLeft: 8, fontSize: 15 }}>{editText}</h2>
        </div>
        <div style={{ display: "flex", alignItems: 'center', height: '100%' }}>
            {divider && <hr style={{ height: '24px', border: '1px solid #424242', marginRight: 12 }} />}
            {action && <Button backgroundColor="#47B647" label="Button" color="white" height={32} borderRadius={8} />}
            <Icon.CloseAltIcon onClick={onClick} style={{ color: 'white', paddingLeft: 12, fontSize: 24 }} />
        </div>
    </div>
);

Toast.propTypes = {
    type: PropTypes.string,
    icon: PropTypes.node,
    divider: PropTypes.bool,
    action: PropTypes.bool,
    closeAction: PropTypes.func,
    editText: PropTypes.string,
};

