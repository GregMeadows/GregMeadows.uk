import React, { FunctionComponent } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Typography, Theme, Grid, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import { Logo } from './Logo';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        height: 300,
        zIndex: -1,
        width: '100%',
        position: 'fixed',
        bottom: 0,
    },
    grid: {
        height: 'calc(100% - 30px)'
    },
    item: {
        minWidth: 400,
        '&>*': {
            marginBottom: 10,
        }
    },
    copyright: {
        color: theme.palette.text.secondary,
    }
}), {
    classNamePrefix: 'footer',
});

export const Footer: FunctionComponent = () => {
    const classes = useStyles();
    const theme = useTheme();
    const mediaSmall = useMediaQuery(theme.breakpoints.down('sm'));
    const mediaMobile = useMediaQuery(theme.breakpoints.down('xs'));

    let logoSize = 80;
    if (mediaMobile) {
        logoSize = 60;
    } else if (mediaSmall) {
        logoSize = 70;
    }
    
    return (
        <footer className={`${classes.root} mui-fixed`}>
            <Grid 
                container 
                alignItems='center'
                justify='space-around'
                className={classes.grid}
            >
                <Grid item className={classes.item}>
                </Grid>
                <Grid item>
                    <Logo size={logoSize} />
                </Grid>
            </Grid>
            <Typography variant='subtitle2' align='center' className={classes.copyright}>Copyright © {(new Date().getFullYear())}. Greg Meadows.</Typography>
        </footer>
    );
};