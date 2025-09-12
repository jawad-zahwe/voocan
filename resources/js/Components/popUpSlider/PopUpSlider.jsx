import React, { useEffect, useState } from "react";
import { Box, IconButton, Typography } from "@mui/material";

const movies = [
  { src: "/assets/images/movies/m1.svg", progress: 0.5, episode: 1 },
  { src: "/assets/images/movies/m2.svg", watched: true, episode: 2 },
  { src: "/assets/images/movies/m3.svg", progress: 0.2, episode: 3 },
  { src: "/assets/images/movies/m4.svg", progress: 0.8, episode: 4 },
  { src: "/assets/images/movies/m5.svg", episode: 5 },
  { src: "/assets/images/movies/m6.svg", episode: 6 },
];

export default function PopUpSlider({ moviesList = movies, index = 0, onIndexChange }) {
  const SLIDE_W = 193; // px
  const GAP = 0; // px
  const VISIBLE_SLIDES = 1;
  const SIDE_PADDING = 150; // left/right padding to avoid fades overlapping content

  const [internalIndex, setInternalIndex] = useState(0);
  const maxIndex = Math.max(0, movies.length - VISIBLE_SLIDES);

  // if parent controls index, use it, otherwise fallback to internal
  const index = controlledIndex ?? internalIndex;

  useEffect(() => {
    if (controlledIndex !== undefined) {
      setInternalIndex(controlledIndex);
    }
  }, [controlledIndex]);

  const handlePrev = () => {
    const newIndex = Math.max(index - 1, 0);
    setInternalIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const handleNext = () => {
    const newIndex = Math.min(index + 1, maxIndex);
    setInternalIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  return (
    <Box
      sx={{
        width:"100%",
        height: 200,
        position: "relative",
        // overflow: "hidden",
        backgroundColor: "#2b2b2b", // dark background behind slider + fades
      }}
    >

      {/* Left arrow */}
      <IconButton
        onClick={handlePrev}
        disabled={index === 0}
        aria-label="previous"
        sx={{
          position: "absolute",
          left: 0,
          width: {
            xs: '90px',
            sm: 'auto'
          },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 60,
          pointerEvents: "auto",
          opacity: index === 0 ? 0.45 : 1,
        }}
      >
        <Image src="/assets/images/ArrowLeft.svg" alt="prev" width={119} height={152} />
      </IconButton>

      {/* Right arrow */}
      <IconButton
        onClick={handleNext}
        disabled={index === maxIndex}
        aria-label="next"
        sx={{
          position: "absolute",
          right: {
            xs: '0',
            md: '30px',
          },
          width: {
            xs: '90px',
            sm: 'auto'
          },
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 60,
          pointerEvents: "auto",
          opacity: index === maxIndex ? 0.45 : 1,
        }}
      >
        <Image src="/assets/images/ArrowRight.svg" alt="next" width={119} height={40} />
      </IconButton>
       {/** left fade  */}
     <Box
      sx={{
       position: "absolute",
       left: 0,
       top: 0,               // fade aligned to top of slider viewport (or movie image top)
       width: {
        xs: `calc(${SIDE_PADDING}px - 3rem)`,
        md: SIDE_PADDING,
       },  // same as padding on slider viewport, 180 is good
       height: 240,          // match movie image height
       background: 'linear-gradient(to right, #1a1a1a 40%, #0B0D1000)',
       zIndex: 5,
       pointerEvents: "none",
       transition: 'opacity 200ms ease',
       }}
       />

      {/* Right fade */}
       <Box
        sx={{
        position: "absolute",
        right: 0,
        top: 0,               // same as left fade
        width: {
          xs: `calc(${SIDE_PADDING}px - 3rem)`,
          md: SIDE_PADDING,
         },  // same width, 180 px
        height: 240,          // match movie image heigh
        background: 'linear-gradient(to left, #1a1a1a 40%, #0B0D1000)',
        zIndex: 5,
        pointerEvents: "none",
        transition: 'opacity 200ms ease',
        }}
        />

      {/* Slider viewport */}
      <Box
        sx={{
          width: "100%",
          height: 200,
          // overflow: "hidden",
          paddingLeft: {
            xs: '4.5rem',
            md: `${SIDE_PADDING}px`,
          },
          paddingRight: `${SIDE_PADDING}px`,
          boxSizing: "border-box", // important so padding doesn't reduce visible width
          position: 'relative',
          zIndex: 4
        }}
      >
        {/* Track */}
        <Box
          sx={{
            display: "flex",
            gap: `${GAP}px`,
            transition: "transform 0.4s ease",
            transform: `translateX(-${index * (SLIDE_W + GAP)}px)`,
            height: "100%",
            alignItems: "stretch",
            
          }}
        >
          {movies.map((m) => (
           <Box
            key={m.episode}
            sx={{
            minWidth: SLIDE_W,
            flexShrink: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            gap: 0.5, // space between image box and text
            }}
            >
            {/* The image box with background, fixed height */}
            <Box
            sx={{
            width:
              169,
       
             height:249,
             position: "relative",
             borderRadius: 0,
             background: "#111",
             border: "1px solid transparent",
             borderImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%) 1",
             backdropFilter: "blur(10px)",
             WebkitBackdropFilter: "blur(10px)",
             overflow: "hidden",
            }}
             >
            <Image src={m.src} alt={`episode-${m.episode}`} fill style={{ objectFit: "cover" }} />
            {/* watched badge */}
       {m.watched && (
        <Box
          sx={{
            position: "absolute",
            top: 2,
            left: 2,
            padding: "4px",
            background: "#0567004D",
            color: "#fff",
            fontFamily: "Cairo, sans-serif",
            fontWeight: 600,
            fontSize: "16px",
            lineHeight: "32px",
            border: "1px solid transparent",
            borderImage: "linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, #666666 100%) 1",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        >
          Watched
        </Box>
      )}
      {/* progress bar */}
      {m.progress && !m.watched && (
        <Box
          sx={{
            position: "absolute",
            bottom: 6,
            left: 6,
            width: `${m.progress * 149}px`,
            height: 11,
            background: "hsla(189, 94%, 43%, 1)",
            boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
            borderRadius: 1,
          }}
        />
      )}
    </Box>

{/* Episode text */}
<Typography
      sx={{
        position: 'absolute',
        width:169,
        bottom: '-2.5rem',
        marginTop: "8px",
        fontFamily: "Cairo, sans-serif",
        fontWeight: 700,
        fontSize: {
          xs: '14px',
          md: "24px"
        },
        color: "#fff",
      }}
    >
      Episode {m.episode}
    </Typography>  
  </Box>

))}

          
        </Box>
      </Box>
    </Box>
  );
}
