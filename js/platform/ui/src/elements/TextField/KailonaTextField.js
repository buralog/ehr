import React, { Component } from 'react';
import { TextField as MuiTextField, withStyles } from '@material-ui/core';

const TextField = withStyles(theme => ({
    root: {
        backgroundColor: 'transparent !important',
        '& input': {
            backgroundColor: 'transparent !important',
            border: 'none !important',
            padding: '7px 6px 0 6px !important',
            height: '34px',
            '&:before': {
                height: '1px',
                marginTop: '0',
            },
        },
        '& label': {
            color: `${theme.palette.primary.main} !important`,
            bottom: '24px !important',
            display: 'flex',
            alignItems: 'flex-end',
            padding: '7px 6px',
        },
        '& label + .MuiInput-formControl': {
            marginTop: '0 !important',
        },
    },
}))(MuiTextField);

export default class KailonaTextField extends Component {
    render() {
        return <TextField {...this.props} />;
    }
}
