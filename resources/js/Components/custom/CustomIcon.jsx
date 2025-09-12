import React from 'react';
import { Box } from '@mui/material';


export const CustomIcon = (props) => {
  return (
    <Box
      sx={{
        width: {
          xs: '12px',
          sm: '18px'
        },
        height: {
          xs: '12px',
          sm: '18px'
        },
        paddingLeft: {
          xs: '4px',
          sm: '8px'
        },
        paddingBottom: {
          xs: '1px',
          sm: '2px'
        },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...props.sx,    // Allow MUI to pass extra styles if needed
      }}
      className={props.className}  // Needed for MUI internal handling
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 14 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M7 12C6.81718 12.0004 6.63736 11.953 6.47803 11.8622C6.31869 11.7714 6.18526 11.6403 6.09072 11.4818L0.158502 1.65818C0.0583886 1.49256 0.00373453 1.30286 0.000184964 1.10869C-0.0033646 0.914514 0.0443191 0.7229 0.13831 0.553636C0.230843 0.385983 0.365785 0.246324 0.529262 0.14902C0.692739 0.0517163 0.878851 0.000279557 1.06846 -5.65256e-07L12.9315 -4.67038e-08C13.1211 0.000280092 13.3073 0.0517169 13.4707 0.149021C13.6342 0.246325 13.7692 0.385984 13.8617 0.553636C13.9557 0.722901 14.0034 0.914515 13.9998 1.10869C13.9963 1.30286 13.9416 1.49256 13.8415 1.65818L7.90928 11.4818C7.81474 11.6403 7.68131 11.7714 7.52197 11.8622C7.36264 11.953 7.18282 12.0004 7 12Z" fill="white" />
      </svg>
    </Box>
  );
};