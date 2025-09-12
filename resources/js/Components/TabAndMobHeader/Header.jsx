

import { Box } from "@mui/material";
import { PlatformSelection } from "../custom/CustomPlatform";
import { CustomSelect } from "../custom/CustomSelect";

// Menu Icon Component
const MenuIcon = () => (
<svg width="140" height="132" viewBox="0 0 152 132" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_dddiiiii_672_12847)">
<path d="M46 66C46 54.9543 54.9543 46 66 46H86C97.0457 46 106 54.9543 106 66C106 77.0457 97.0457 86 86 86H66C54.9543 86 46 77.0457 46 66Z" fill="#333333" fill-opacity="0.6"/>
<path d="M66 46.5996H86C96.7143 46.5996 105.4 55.2857 105.4 66C105.4 76.7143 96.7143 85.4004 86 85.4004H66C55.2857 85.4004 46.5996 76.7143 46.5996 66C46.5996 55.2857 55.2857 46.5996 66 46.5996Z" stroke="url(#paint0_linear_672_12847)" stroke-width="1.2"/>
<path d="M66 46.5996H86C96.7143 46.5996 105.4 55.2857 105.4 66C105.4 76.7143 96.7143 85.4004 86 85.4004H66C55.2857 85.4004 46.5996 76.7143 46.5996 66C46.5996 55.2857 55.2857 46.5996 66 46.5996Z" stroke="black" stroke-opacity="0.2" stroke-width="1.2"/>
<path d="M86 66C86 66.3141 85.8736 66.6153 85.6485 66.8374C85.4235 67.0594 85.1183 67.1842 84.8 67.1842H67.2C66.8817 67.1842 66.5765 67.0594 66.3515 66.8374C66.1264 66.6153 66 66.3141 66 66C66 65.6859 66.1264 65.3847 66.3515 65.1626C66.5765 64.9406 66.8817 64.8158 67.2 64.8158H84.8C85.1183 64.8158 85.4235 64.9406 85.6485 65.1626C85.8736 65.3847 86 65.6859 86 66ZM67.2 60.8684H84.8C85.1183 60.8684 85.4235 60.7437 85.6485 60.5216C85.8736 60.2995 86 59.9983 86 59.6842C86 59.3701 85.8736 59.0689 85.6485 58.8468C85.4235 58.6248 85.1183 58.5 84.8 58.5H67.2C66.8817 58.5 66.5765 58.6248 66.3515 58.8468C66.1264 59.0689 66 59.3701 66 59.6842C66 59.9983 66.1264 60.2995 66.3515 60.5216C66.5765 60.7437 66.8817 60.8684 67.2 60.8684ZM84.8 71.1316H67.2C66.8817 71.1316 66.5765 71.2563 66.3515 71.4784C66.1264 71.7005 66 72.0017 66 72.3158C66 72.6299 66.1264 72.9311 66.3515 73.1532C66.5765 73.3752 66.8817 73.5 67.2 73.5H84.8C85.1183 73.5 85.4235 73.3752 85.6485 73.1532C85.8736 72.9311 86 72.6299 86 72.3158C86 72.0017 85.8736 71.7005 85.6485 71.4784C85.4235 71.2563 85.1183 71.1316 84.8 71.1316Z" fill="white"/>
</g>
<defs>
<filter id="filter0_dddiiiii_672_12847" x="0.5" y="0.5" width="151" height="131" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="3" operator="erode" in="SourceAlpha" result="effect1_dropShadow_672_12847"/>
<feOffset dy="3"/>
<feGaussianBlur stdDeviation="6"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.153 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect2_dropShadow_672_12847"/>
<feOffset dy="10.24"/>
<feGaussianBlur stdDeviation="14.2"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.254 0"/>
<feBlend mode="normal" in2="effect1_dropShadow_672_12847" result="effect2_dropShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="22.75"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.0594 0"/>
<feBlend mode="normal" in2="effect2_dropShadow_672_12847" result="effect3_dropShadow_672_12847"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect3_dropShadow_672_12847" result="shape"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset/>
<feGaussianBlur stdDeviation="0.7825"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.95 0 0 0 0 0.95 0 0 0 0 1 0 0 0 0.0568 0"/>
<feBlend mode="overlay" in2="shape" result="effect4_innerShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.096"/>
<feGaussianBlur stdDeviation="0.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 0.15 0 0 0 0 0.25 0 0 0 0.012 0"/>
<feBlend mode="normal" in2="effect4_innerShadow_672_12847" result="effect5_innerShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="-0.096"/>
<feGaussianBlur stdDeviation="0.75"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.15 0 0 0 0 0.45 0 0 0 0 1 0 0 0 0.0144 0"/>
<feBlend mode="normal" in2="effect5_innerShadow_672_12847" result="effect6_innerShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="1.5"/>
<feGaussianBlur stdDeviation="1.995"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.297 0"/>
<feBlend mode="normal" in2="effect6_innerShadow_672_12847" result="effect7_innerShadow_672_12847"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="0.2" dy="0.32"/>
<feGaussianBlur stdDeviation="4.32"/>
<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
<feColorMatrix type="matrix" values="0 0 0 0 0.82 0 0 0 0 0.9 0 0 0 0 1 0 0 0 0.04 0"/>
<feBlend mode="normal" in2="effect7_innerShadow_672_12847" result="effect8_innerShadow_672_12847"/>
</filter>
<linearGradient id="paint0_linear_672_12847" x1="46" y1="66" x2="46" y2="26" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.297"/>
<stop offset="0.18" stop-color="white" stop-opacity="0.132"/>
<stop offset="0.5" stop-color="white" stop-opacity="0"/>
<stop offset="0.82" stop-color="white" stop-opacity="0.1155"/>
<stop offset="1" stop-color="white" stop-opacity="0.264"/>
</linearGradient>
</defs>
</svg>

);

// Search Icon Component
const SearchIcon = () => (
  <svg width="39" height="40" viewBox="0 0 39 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19.5 0.5C29.9934 0.5 38.5 9.00659 38.5 19.5V20.5C38.5 30.9934 29.9934 39.5 19.5 39.5C9.00659 39.5 0.5 30.9934 0.5 20.5V19.5C0.5 9.00659 9.00659 0.5 19.5 0.5Z" fill="#4D4D4D" fillOpacity="0.6"/>
    <path d="M19.5 0.5C29.9934 0.5 38.5 9.00659 38.5 19.5V20.5C38.5 30.9934 29.9934 39.5 19.5 39.5C9.00659 39.5 0.5 30.9934 0.5 20.5V19.5C0.5 9.00659 9.00659 0.5 19.5 0.5Z" stroke="url(#paint0_linear_672_12846)"/>
    <path d="M29.1707 28.0995L24.7786 23.7057C26.0955 21.9897 26.7103 19.8371 26.4983 17.6845C26.2864 15.5319 25.2635 13.5405 23.6372 12.1142C22.0109 10.688 19.903 9.93381 17.741 10.0046C15.579 10.0753 13.5249 10.9658 11.9954 12.4952C10.4658 14.0247 9.57532 16.0787 9.50456 18.2406C9.43381 20.4025 10.1881 22.5103 11.6143 24.1365C13.0406 25.7628 15.0321 26.7856 17.1848 26.9976C19.3375 27.2095 21.4903 26.5947 23.2064 25.2779L27.6021 29.6744C27.7054 29.7776 27.8279 29.8595 27.9628 29.9154C28.0977 29.9712 28.2423 30 28.3883 30C28.5343 30 28.6788 29.9712 28.8137 29.9154C28.9486 29.8595 29.0711 29.7776 29.1744 29.6744C29.2776 29.5712 29.3595 29.4486 29.4154 29.3137C29.4712 29.1789 29.5 29.0343 29.5 28.8883C29.5 28.7423 29.4712 28.5978 29.4154 28.4629C29.3595 28.328 29.2776 28.2055 29.1744 28.1022L29.1707 28.0995ZM11.7383 18.5268C11.7383 17.2831 12.1071 16.0672 12.7982 15.033C13.4892 13.9989 14.4714 13.1929 15.6206 12.7169C16.7697 12.2409 18.0342 12.1164 19.2541 12.359C20.4741 12.6017 21.5947 13.2006 22.4742 14.0801C23.3537 14.9596 23.9527 16.0801 24.1953 17.3C24.438 18.5199 24.3134 19.7843 23.8375 20.9334C23.3615 22.0825 22.5554 23.0647 21.5212 23.7557C20.487 24.4467 19.2711 24.8155 18.0272 24.8155C16.3598 24.8138 14.7612 24.1507 13.5822 22.9717C12.4031 21.7927 11.74 20.1942 11.7383 18.5268Z" fill="white"/>
    <defs>
      <linearGradient id="paint0_linear_672_12846" x1="19.5" y1="40" x2="19.5" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopOpacity="0.2"/>
        <stop offset="1" stopColor="#666666"/>
      </linearGradient>
    </defs>
  </svg>
);

export default function MobileTabletHeader() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height:"202px",
        px: 2,
        py: 1,
        paddingLeft:"20rem",
         padding: 'var(--Space-4XL, 3rem) var(--Horizontal-Padding, 6rem)',
                gap: 'var(--Space-S, 0.5rem) var(--Space-4XL, 3rem)',
                flexWrap:"wrap",
                background: 'linear-gradient(360deg, rgba(11, 13, 16, 0) 0%, #15191E 64.34%)'
      }}
    >
      {/* Logo Centered */}
      <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center",paddingRight:"8rem" }}>
         <svg width="151" height="26" viewBox="0 0 151 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.2452 0.517264C7.73617 0.517264 8.16319 0.850358 8.2849 1.32621L10.9935 11.9894C11.5236 14.1266 11.9259 16.1727 12.3013 18.3306H12.4499C12.8067 16.1272 13.2049 14.1948 13.7103 11.9894L16.3178 1.33448C16.4354 0.854496 16.8644 0.515195 17.3595 0.515195H22.6859C23.4203 0.515195 23.9381 1.23931 23.7008 1.93861L15.9464 24.7484C15.7979 25.1849 15.3895 25.4766 14.9315 25.4766H9.2297C8.76967 25.4766 8.36122 25.1828 8.2127 24.7442L0.557332 1.93447C0.322163 1.23725 0.839947 0.517264 1.57227 0.517264H7.2452Z" fill="white"/>
                <path d="M99.3573 23.6725C99.4316 24.1773 99.1222 24.6594 98.6188 24.8125C97.3378 25.2014 95.4482 25.4952 93.3543 25.4952C85.8331 25.4952 81.0142 20.896 81.0142 13.241C81.0142 6.0764 85.8558 0.504823 94.4002 0.504823C95.902 0.504823 97.4615 0.724127 98.7034 1.0655C99.2336 1.21032 99.5492 1.73789 99.4419 2.25926L98.7529 5.63158C98.6333 6.21709 98.0268 6.56259 97.4306 6.41156C96.7251 6.23157 95.8442 6.10123 94.7468 6.10123C90.9201 6.10123 88.5189 8.95219 88.5416 12.9679C88.5416 17.3706 91.2605 19.8202 94.8128 19.8202C95.8566 19.8202 96.7498 19.7022 97.5379 19.4995C98.1547 19.3402 98.7735 19.7416 98.8643 20.3519L99.3594 23.6725H99.3573Z" fill="white"/>
                <path d="M118.94 25.4952C118.428 25.4952 117.991 25.1269 117.905 24.62L117.636 23.0663H117.49C115.976 24.9986 113.663 26 110.992 26C106.406 26 103.539 22.5656 103.539 18.5271C103.539 12.1321 109.212 9.22941 116.914 9.22113V8.83838C116.914 7.34877 116.089 5.62329 112.756 5.62743C110.918 5.62743 109.094 6.09914 107.631 6.7674C107.054 7.03222 106.377 6.69913 106.204 6.08673L105.455 3.42818C105.313 2.92543 105.562 2.39993 106.035 2.17856C107.782 1.35927 110.61 0.50067 114.14 0.50067C122.053 0.50067 124.217 5.43709 124.217 10.9507V19.6609C124.217 21.347 124.281 22.9959 124.429 24.3304C124.5 24.9511 124.007 25.491 123.384 25.491H118.942L118.94 25.4952ZM117.129 14.9024C117.129 14.2982 116.621 13.81 116.021 13.8472C113.055 14.0334 110.623 15.043 110.623 17.7719C110.623 19.8781 111.928 20.8174 113.438 20.8174C115.056 20.8174 116.506 19.7602 116.989 18.2168C117.1 17.8464 117.129 17.3975 117.129 16.9713V14.9024Z" fill="white"/>
                <path d="M128.367 8.43909C128.367 5.8964 128.295 3.66404 128.213 1.64892C128.188 1.03239 128.675 0.521366 129.283 0.521366H133.624C134.172 0.521366 134.63 0.939286 134.69 1.49169L134.94 3.84404H135.084C136.169 2.10408 138.591 0 142.277 0C147.251 0 150.5 3.55232 150.5 10.4418V24.6614C150.5 25.2614 150.019 25.7476 149.427 25.7476H144.144C143.552 25.7476 143.072 25.2614 143.072 24.6614V11.2238C143.072 8.31289 142.123 6.1426 139.581 6.1426C137.762 6.1426 136.6 7.4336 136.085 8.89632C135.891 9.39286 135.792 10.1666 135.792 10.9507V24.6594C135.792 25.2593 135.311 25.7455 134.719 25.7455H129.436C128.844 25.7455 128.363 25.2593 128.363 24.6594V8.43909H128.367Z" fill="white"/>
                <path d="M64.5666 25.4952C60.5295 25.4952 56.8184 23.6063 54.3842 20.3147C53.5797 19.2264 53.8169 17.6913 54.9123 16.8927C55.3393 16.5823 55.8427 16.4168 56.3708 16.4168C57.1526 16.4168 57.8952 16.7892 58.3594 17.4161C59.855 19.4395 62.12 20.5981 64.5687 20.5981C68.8595 20.5981 72.3499 17.1327 72.3499 12.8707C72.3499 8.60875 68.8595 5.14333 64.5687 5.14333C61.6435 5.14333 58.8895 6.69294 57.3816 9.18805L51.4137 19.0733C49.0207 23.0332 44.6495 25.4911 40.0018 25.4911C32.9921 25.4911 27.2903 19.8285 27.2903 12.8686C27.2903 5.90883 32.99 0.252422 39.9997 0.252422C44.0657 0.252422 47.7789 2.14548 50.1904 5.44332C50.9887 6.53571 50.7432 8.06877 49.6437 8.86116C49.2187 9.16736 48.7195 9.32874 48.1976 9.32874C47.4096 9.32874 46.6628 8.95012 46.2007 8.31911C44.7278 6.30399 42.4669 5.14747 39.9997 5.14747C35.7089 5.14747 32.2185 8.61289 32.2185 12.8748C32.2185 17.1368 35.7089 20.6022 39.9997 20.6022C42.9249 20.6022 45.6788 19.0526 47.1868 16.5575L53.1506 6.67846C55.5456 2.71443 59.9189 0.254491 64.5666 0.254491C71.5763 0.254491 77.2781 5.9171 77.2781 12.8769C77.2781 19.8367 71.5763 25.4993 64.5666 25.4993V25.4952Z" fill="white"/>
                </svg>
      </Box>

      {/* Right Icons */}
      <div style={{ display: "flex" , alignItems:"center" }} className="gap-x-0">
        <SearchIcon  />
        <MenuIcon />
      </div>

       <Box sx={{ display: 'flex',paddingBottom:"3rem", alignSelf:"center",justifyContent: 'center', alignItems: 'center', gap: '12px', flexGrow: 1 ,width:"415px", height:"42px",cursor:"pointer"}}>
               <PlatformSelection/>
              <CustomSelect/>
              </Box>
      
    </Box>
  );
}
