
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import React from 'react';
import Header from '../layouts/header';

export const HeroSection = () => {
    return (
   
  <img
    src="/assets/images/Hero.svg"
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: -1
    }}
  />



    );
};
