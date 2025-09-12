import { useEffect, useState } from 'react';
import React from 'react';
import { Box,IconButton } from '@mui/material';

export const PlatformSelection = ({ onStateChange }) => {
    const [mounted, setMounted] = useState(false);
    const [showSelection, setShowSelection] = useState(false);

    const handleShowSelection = (show) => {
      setShowSelection(show);
      onStateChange?.(show);
    };

   useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        handleShowSelection(true);
      } else {
        handleShowSelection(false);
      }
    };

    handleResize(); // set initial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [onStateChange]);

  if (!mounted) {
    return null; // avoid hydration mismatch
  }

  return (
    <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Platform Selection Container */}
      <Box
        sx={{
          width: showSelection ? 
          { xs:'309px',
          "@media (min-width: 600px)": {
            width: "390px",
          },
          "@media (min-width: 768px)": {
            width: "309px",
          },
          } : 
          '0px',
          height: {
            xs: "50px",
            "@media (min-width: 600px)": {
              height: "70px",
            },
            "@media (min-width: 768px)": {
              height: "40px",
            },
          },
          borderRadius: {
            xs: "24px",
            "@media (min-width: 600px)": {
              borderRadius: "60px",
            },
            "@media (min-width: 768px)": {
              borderRadius: "24px",
            },
          },
          position: 'absolute',
          left: '50%',
          transform: showSelection ? 'translateX(-50%) scaleX(1)' : 'translateX(-50%) scaleX(0)',
          overflow: 'hidden',
          transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          opacity: showSelection ? 1 : 0,
          transformOrigin: 'center',
          zIndex: 2,
          '&::before': {
            content: '""',
            position: 'absolute',
            inset: 0,
            borderRadius: {
              xs: "24px",
              "@media (min-width: 600px)": {
                borderRadius: "60px",
              },
              "@media (min-width: 768px)": {
                borderRadius: "24px",
              },
            },
            padding: '1px',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%)',
            WebkitMask:
              'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
            WebkitMaskComposite: 'xor',
            maskComposite: 'exclude',
            pointerEvents: 'none',
            zIndex: 1,
            boxSizing: 'border-box',
          },
        }}
      >
        {/* Inner Content Wrapper */}
        <Box
          sx={{
            width: '100%',
            height: '100%',
            borderRadius: '24px',
            background: 'var(--Panels-4, rgba(77, 77, 77, 0.6))',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: '24px',
            paddingRight: '24px',
            gap: {
              xs: "21px",
              "@media (min-width: 600px)": {
                gap: "35px",
              },
              "@media (min-width: 768px)": {
                gap: "24px",
              },
            },
            position: 'relative',
            zIndex: 2,
            transition: 'all 0.3s ease-in-out',
          }}
        >
          <IconButton 
            sx={{ 
              p: 0,
              transition: 'transform 0.2s linear',
              '&:hover': { transform: 'scale(1.1)' , opacity: '0.7'}
            }}
          >
            <img src="/assets/images/platform/Apple.svg" alt="Apple" width={40} height={14} />
          </IconButton>
          <IconButton 
            sx={{ 
              p: 0,
              transition: 'transform 0.2s linear',
              '&:hover': { transform: 'scale(1.1)' , opacity: '0.7' }
            }}
          >
            <img src="/assets/images/platform/Disney.svg" alt="Disney+" width={40} height={22} />
          </IconButton>
          <IconButton 
            sx={{ 
              p: 0,
              transition: 'transform 0.2s linear',
              '&:hover': { transform: 'scale(1.1)' , opacity: '0.7' }
            }}
          >
            <img src="/assets/images/platform/Amazon.svg" alt="Amazon Prime" width={33} height={22} />
          </IconButton>
          <IconButton 
            sx={{ 
              p: 0,
              transition: 'transform 0.2s linear',
              '&:hover': { transform: 'scale(1.1)' , opacity: '0.7' }
            }}
          >
            <img src="/assets/images/platform/Netflix.svg" alt="Netflix" width={40} height={12} />
          </IconButton>
          <IconButton 
            sx={{ 
              width: {
                xs: "50px",
                "@media (min-width: 600px)": {
                  width: "75px",
                },
                "@media (min-width: 768px)": {
                  width: "41px",
                },
              },
              height: {
                xs: "50px",
                "@media (min-width: 600px)": {
                  height: "70px",
                },
                "@media (min-width: 768px)": {
                  height: "40px",
                },
              },
              p: 0, 
              ml: "auto",
              transition: 'all 0.2s ease-in-out',
              '&:hover': { 
                transform: 'scale(1.1) rotate(90deg)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              }
            }} 
            onClick={() => handleShowSelection(false)}
          >
            <svg width="100%" height="100%" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="0.5" width="39" height="39" rx="19.5" fill="#4D4D4D" fillOpacity="0.6" stroke="url(#paint0_linear_691_1044)"/>
              <path d="M26.7689 25.1686C26.9701 25.3698 27.0832 25.6426 27.0832 25.9272C27.0832 26.2117 26.9701 26.4846 26.7689 26.6858C26.5677 26.887 26.2948 27 26.0103 27C25.7257 27 25.4528 26.887 25.2516 26.6858L19.585 21.0177L13.9165 26.684C13.7153 26.8852 13.4424 26.9982 13.1579 26.9982C12.8733 26.9982 12.6004 26.8852 12.3992 26.684C12.198 26.4828 12.085 26.2099 12.085 25.9254C12.085 25.6409 12.198 25.368 12.3992 25.1668L18.0677 19.5004L12.401 13.8323C12.1998 13.6311 12.0867 13.3583 12.0867 13.0737C12.0867 12.7892 12.1998 12.5163 12.401 12.3151C12.6022 12.1139 12.8751 12.0009 13.1596 12.0009C13.4442 12.0009 13.7171 12.1139 13.9183 12.3151L19.585 17.9832L25.2534 12.3142C25.4546 12.113 25.7275 12 26.0121 12C26.2966 12 26.5695 12.113 26.7707 12.3142C26.9719 12.5154 27.085 12.7883 27.085 13.0728C27.085 13.3574 26.9719 13.6302 26.7707 13.8314L21.1023 19.5004L26.7689 25.1686Z" fill="white"/>
              <defs>
                <linearGradient id="paint0_linear_691_1044" x1="20.5" y1="40" x2="20.5" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopOpacity="0.2"/>
                  <stop offset="1" stopColor="#666666"/>
                </linearGradient>
              </defs>
            </svg>
          </IconButton>
        </Box>
      </Box>

      {/* The + Button (Always visible but moves) */}
      <IconButton
        onClick={() => handleShowSelection(true)}
        sx={{
          width: {
            xs: "50px",
            "@media (min-width: 600px)": {
              width: "70px",
            },
            "@media (min-width: 768px)": {
              width: "40px",
            },
          },
          height: {
            xs: "50px",
            "@media (min-width: 600px)": {
              height: "110px",
            },
            "@media (min-width: 768px)": {
              height: "40px",
            },
          },
          padding: 0,
          position: 'relative',
          zIndex: showSelection ? 1 : 3,
          opacity: showSelection ? 0 : 1,
          overflow: 'hidden',
          transform: showSelection ? 'scale(0.8)' : 'scale(1)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          filter: 'brightness(1)',
          
          '&::after': {
    content: '""',
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(162deg, #303740, #30374000)',
    opacity: 0,
    transition: '0.3s',
    zIndex: -1,
  },
          '&:hover': {
            transform: showSelection ? 'scale(0.8)' : 'scale(1.1)',
            '&::after': {
              opacity: 1,
              zIndex:1,
            },
          },
          '&:active': {
              opacity: 0.5,
          },
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" fill="#4D4D4D" fillOpacity="0.6"/>
          <rect x="0.5" y="0.5" width="39" height="39" rx="19.5" stroke="url(#paint0_linear_573_12866)"/>
          <path d="M28 20C28 20.2546 27.8989 20.4988 27.7188 20.6788C27.5388 20.8589 27.2946 20.96 27.04 20.96H20.96V27.04C20.96 27.2946 20.8589 27.5388 20.6788 27.7188C20.4988 27.8989 20.2546 28 20 28C19.7454 28 19.5012 27.8989 19.3212 27.7188C19.1411 27.5388 19.04 27.2946 19.04 27.04V20.96H12.96C12.7054 20.96 12.4612 20.8589 12.2812 20.6788C12.1011 20.4988 12 20.2546 12 20C12 19.7454 12.1011 19.5012 12.2812 19.3212C12.4612 19.1411 12.7054 19.04 12.96 19.04H19.04V12.96C19.04 12.7054 19.1411 12.4612 19.3212 12.2812C19.5012 12.1011 19.7454 12 20 12C20.2546 12 20.4988 12.1011 20.6788 12.2812C20.8589 12.4612 20.96 12.7054 20.96 12.96V19.04H27.04C27.2946 19.04 27.5388 19.1411 27.7188 19.3212C27.8989 19.5012 28 19.7454 28 20Z" fill="white"/>
          <defs>
            <linearGradient id="paint0_linear_573_12866" x1="20" y1="40" x2="20" y2="0" gradientUnits="userSpaceOnUse">
              <stop stopOpacity="0.2"/>
              <stop offset="1" stopColor="#666666"/>
            </linearGradient>
          </defs>
        </svg>
      </IconButton>
    </Box>
  );
};
