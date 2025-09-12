

export const customMenuProps = {
  disableScrollLock: true,
  keepMounted: false,
  PaperProps: {
    sx: {
      mt: {
        xs: '6px',
        sm: '20px'
      },
      width: {
        xs: '120px',
        sm: '200px'
      },
      borderRadius: '24px',
      background: 'rgba(77, 77, 77, 0.6)',
      position: 'relative',
      overflow: 'hidden',
      padding: '1px',
      backdropFilter: 'blur(5px)',
      boxSizing: 'border-box',
      maxHeight: 'none',
      '&::before': {
        content: '""',
        position: 'absolute',
        inset: 0,
        borderRadius: '24px',
        padding: '1px',
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), #666666)',
        WebkitMask:
          'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
        pointerEvents: 'none',
        zIndex: 1,
      },
      '& .MuiMenu-list': {
        position: 'relative',
        zIndex: 2,
        padding: {
          xs: '3px 5px',
          sm: '16px 16px'
        },
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        rowGap: {
          xs: '3px',
          sm: '24px'
        },
        columnGap: {
          xs: '10px',
          sm: '36px'
        },
        background: 'rgba(77, 77, 77, 0.6)',
        borderRadius: '22px',
        boxSizing: 'border-box',
        maxHeight: 'none',
      },
    },
  },
};
