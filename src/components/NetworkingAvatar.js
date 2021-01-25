import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

import pic08 from '../assets/images/networking1.jpg'

import { Box, Center, Container } from "@chakra-ui/react"


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
       <Avatar alt="Remy Sharp" src={pic08} className={classes.large} />
        <h6>Networking
        </h6>
    </div>
  );
}
