import { useState, useRef, useEffect } from 'react';
import React from 'react';
import {  Box,Select, MenuItem } from '@mui/material';
import { customMenuProps } from './CustomMenuProps';
import { CustomIcon } from './CustomIcon';

export const CustomSelect = () => {
  const [value, setValue] = useState('all');
  const [open, setOpen] = useState(false);
  const [justClosed, setJustClosed] = useState(false);
  const selectRef = useRef(null);

  // إغلاق القائمة عند الضغط خارجها
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (selectRef.current && !selectRef.current.contains(event.target)) {
        setOpen(false);
        setJustClosed(true);

        setTimeout(() => {
          setJustClosed(false);
        }, 300);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);



  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    setOpen(false);
  };

  // دالة لفتح/إغلاق القائمة (toggle)
  const handleToggle = () => {
    // Don't toggle if we just closed the menu (prevent immediate reopening)
    if (justClosed) {
      return;
    }
    setOpen(prevOpen => !prevOpen);
  };

  return (
  <Box
  ref={selectRef}
  className="shadow-[0px_-1px_0px_#666666]"
  onClick={handleToggle} 
  sx={{
    width: {
      xs:"50px",
      sm:"94px"
    },
    height: {
      xs:"22px",
      sm:"42px"
    },
    borderRadius: '24px',
    padding:{
      xs: "1rem 2rem",
      sm: "2px 20px",
    },
    backgroundColor: 'hsla(0, 0%, 30%, 0.6)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: "center",
    gap: '12px',
    overflow: 'hidden',
    cursor: 'pointer', 
    transition: 'all 0.3s ease',
    zIndex: 0,

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
    '&::after': {
      opacity: 1,
    },
  },

  '&:active': {
    opacity: 0.5,
  },

    '&::before': {
      content: '""',
      position: 'absolute',
      inset: 0,  // shorthand for top:0; right:0; bottom:0; left:0
      borderRadius: '24px',
      background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%)',
      WebkitMask:
        'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
      WebkitMaskComposite: 'xor',
      maskComposite: 'exclude',
      pointerEvents: 'none',
      zIndex: 1,
      boxSizing: 'border-box',
    },
    '& > *': {
      position: 'relative',
      zIndex: 2,
    },
  }}
>
   <Select
  value={value}
  open={open}
  onClose={handleClose}
  onChange={handleChange}
  MenuProps={{
    ...customMenuProps,
    onClose: handleClose,
    disableAutoFocusItem: true,
    disableEnforceFocus: true,
    disableRestoreFocus: true,
  }}
  variant="standard"
  disableUnderline
  IconComponent={CustomIcon}
  sx={{
    pt: "3px",
    fontFamily: "Cairo, SemiBold",
    fontSize: {
      xs: "9px",   // Small devices
      sm: "16px"   // Medium devices
    },
    fontWeight: 600,
    color: 'hsla(0, 0%, 100%, 1)',
    '& .MuiSelect-select': {
      padding: 0,
      display: 'flex',
      alignItems: 'center',
    },
    '& .MuiSelect-icon': {
      transition: 'all 0.3s ease',
      transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
    },
    // إزالة إخفاء الأيقونة عند فتح القائمة
    '& .MuiSelect-iconOpen': {
      opacity: 1,
    },
  }}
>
  {["All", " 3D", "Epics", "Anime", "Sport", "Action", "History", "Classic", "Kids", "Drama"].map((item, index) => (
    <MenuItem
      key={index}
      value={item.toLowerCase()}
      onClick={(e) => {
        e.stopPropagation(); // منع انتشار الحدث
        setOpen(false); // إغلاق القائمة فقط
      }}
      sx={{
        width: '100%',      // Ensure fills grid cell
        height: '100%',  
        padding: '4px 8px',  // padding معتدل لزيادة منطقة النقر
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',    // إضافة مؤشر النقر
        fontFamily: 'Cairo',
        fontStyle: 'normal',
        fontSize: {
          xs: '9px',
          sm: '12px'
        },
        color: 'hsla(0, 0%, 100%, 1)',
        lineHeight: '100%',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        gridColumnStart: (index % 2) + 1,  // Left (1) or Right (2)
        gridRowStart: Math.floor(index / 2) + 1,  // Row Number
        // إضافة hover effect لتحسين تجربة المستخدم
        '&:hover': {
          borderRadius: '10px',
          backgroundColor: '#686665',
          transform: 'scale(1.1)',
          transition: '0.3s linear'
        }
      }}
    >
      {item}
    </MenuItem>
  ))}
</Select>
    </Box>
  );
};
