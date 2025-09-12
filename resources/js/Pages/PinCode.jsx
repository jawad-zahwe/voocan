"use client";
import { Box, Typography, InputBase } from '@mui/material';
import { useState, useEffect } from 'react';

export default function pinCodePage() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [pinCode, setPinCode] = useState('');

  useEffect(() => {
    // جلب معلومات البروفايل المحدد من localStorage
    const profile = JSON.parse(localStorage.getItem('selectedProfile'));
    if (profile) {
      setSelectedProfile(profile);
    }
  }, []);

  const verifyPin = async () => {
    if (!selectedProfile || !pinCode) {
      alert('Please enter PIN code');
      return;
    }

    try {
      const response = await fetch(`/profiles/${selectedProfile.id}/verify-pin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify({ pin_code: pinCode })
      });

      const data = await response.json();

      if (data.success) {
        // حفظ معلومات البروفايل المحدد في localStorage
        localStorage.setItem('currentProfile', JSON.stringify(data.data));
        // الانتقال إلى صفحة الويلكم الرئيسية
        window.location.href = '/';
      } else {
        alert(data.message || 'Invalid PIN. Please try again.');
        setPinCode(''); // مسح الحقل
      }
    } catch (error) {
      console.error('Error verifying PIN:', error);
      alert('Error verifying PIN. Please try again.');
    }
  };

  const verifyPinWithValue = async (pinValue) => {
    if (!selectedProfile || !pinValue) {
      alert('Please enter PIN code');
      return;
    }

    try {
      const response = await fetch(`/profiles/${selectedProfile.id}/verify-pin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || ''
        },
        body: JSON.stringify({ pin_code: pinValue })
      });

      const data = await response.json();

      if (data.success) {
        // حفظ معلومات البروفايل المحدد في localStorage
        localStorage.setItem('currentProfile', JSON.stringify(data.data));
        // الانتقال إلى صفحة الويلكم الرئيسية
        window.location.href = '/';
      } else {
        alert(data.message || 'Invalid PIN. Please try again.');
        setPinCode(''); // مسح الحقل
      }
    } catch (error) {
      console.error('Error verifying PIN:', error);
      alert('Error verifying PIN. Please try again.');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      verifyPin();
    }
  };

  return (
     <Box
          sx={{
            minHeight: '100vh',
            position: 'relative',
            backgroundColor: 'hsla(216, 19%, 5%, 1)', // Dark base
            backgroundImage: `
              url('/assets/images/Lines.svg'),
              url('/assets/images/Ellipses.svg'),
              url('/assets/images/PlanetArt.svg')
            `,
            backgroundRepeat: 'no-repeat, no-repeat, no-repeat',
            backgroundSize: `
              cover,              /* Lines SVG covers entire background */
              900px auto,         /* Shadow SVG size (adjust width as needed) */
              60% auto           /* Blue rainbow spans full width at bottom */
            `,
            backgroundPosition: `
              center ,         /* Lines at top */
              center center,      /* Shadow in middle */
               bottom       /* Blue rainbow at bottom */
            `,
            justifyItems:"center",
            alignContent:"center"
          }}
        >
          <Box
      sx={{
        p: 4,
        width: {
          xs:"250px",
          md:"484px",
          lg:"'584px'"
      
        },
        height:{
          xs:"178px",
          md:"296px",
          lg:"320px"
        },
        alignContent:"center",
        textAlign:"center",
        borderRadius: '1.5rem',
        background: 'hsla(0, 0%, 5%, 0.6)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0 0 20px rgba(0,0,0,0.6)',
        gap:"32",
        backgroundClip: 'padding-box', // Important to prevent bleed into border
          '&::before': {
           content: '""',
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           padding: '1px', // Border thickness
           borderRadius: {
            xs:"30px",
            md:"48px"
           },
           background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
           WebkitMask:
           'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
           WebkitMaskComposite: 'xor',
           maskComposite: 'exclude',
           pointerEvents: 'none',
           zIndex: 1,
        },
        '& > *': {
        position: 'relative',
        zIndex: 2,
       },
       }}
        >
        <Typography variant="h5" sx={{ color: 'hsla(0, 0%, 100%, 1)', mb: 4,fontStyle:"Bold",  fontFamily: 'Cairo, sans-serif',fontSize:{
          xs:16,
          md:32
        }, fontWeight:700 }}>
          Enter Your PIN
        </Typography>
    
        <Box
        sx={{
        mt:{
          xs:"mt-6"
        },
        display: 'flex',
        width: {
          xs:"105px",
          sm:"200px",
          lg:'274px'
        
        },
        height:{
          xs:"30px",
          sm:"40px",
          md:"50px"
        },
        padding: '16px 25px',
        justifySelf:"center",
        gap: '12px',
        flexShrink: 0,
        borderRadius: '15px',
        border: '1px solid rgba(0, 0, 0, 0.20)',
        background: 'rgba(51, 51, 51, 0.60)',
        boxShadow: '0 4px 4px 0 rgba(0, 0, 0, 0.25)',
        backdropFilter: 'blur(7.5px)',
          '&::before': {
           content: '""',
           position: 'absolute',
           top: 0,
           left: 0,
           right: 0,
           bottom: 0,
           padding: '1px', // Border thickness
           borderRadius: "16px",
           background: 'linear-gradient(to bottom, hsla(0, 0%, 40%, 1), hsla(0, 0%, 0%, 0.2))',
           WebkitMask:
           'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
           WebkitMaskComposite: 'xor',
           maskComposite: 'exclude',
           pointerEvents: 'none',
           zIndex: 1,
           },
           '& > *': {
           position: 'relative',
           zIndex: 2,
           },
           }}
            >
            <InputBase
            placeholder="PIN"
            value={pinCode}
            onChange={(e) => {
              // السماح فقط بالأرقام
              const value = e.target.value.replace(/[^0-9]/g, '');
              setPinCode(value);
              
              // التحقق التلقائي عند إدخال 4 أرقام
              if (value.length === 4) {
                // استخدام setTimeout لضمان تحديث state قبل التحقق
                setTimeout(() => {
                  verifyPinWithValue(value);
                }, 100);
              }
            }}
            onKeyPress={handleKeyPress}
            sx={{
            color: 'hsla(0, 0%, 100%, 0.8)',
            fontSize: '16px',
            fontStyle:"Bold",  
            fontFamily: 'Cairo, sans-serif',
            flex: 1,
            '& input': {
            textAlign: 'center',
          },
        }}
        inputProps={{
          maxLength: 4, // تحديد الحد الأقصى بـ 4 أرقام
        }}
        />
            </Box>
          </Box>
        </Box>
  )}
