

import React from "react";
import { PlatformSelection } from "../custom/CustomPlatform";
import { CustomSelect } from "../custom/CustomSelect";
import { Link } from '@inertiajs/react';

export default function MobileHeader() {
  const [showPlatformSelection, setShowPlatformSelection] = React.useState(false);
  const [showSearchField, setShowSearchField] = React.useState(false);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = React.useState(false);

  // Prevent body scroll when menu is open
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <div
      className="w-full sm:w-[100%] "
      style={{
        background: 'linear-gradient(180deg, #0A0C0E 0%, rgba(10, 12, 14, 0.95) 30%, rgba(10, 12, 14, 0.8) 60%, rgba(10, 12, 14, 0) 100%)'
      }}
    >
     
     <div className="flex w-full max-w-[425px] sm:w-[425px] md:w-[768px] items-center h-[120px] sm:h-[140px] md:h-[173px] lg:h-[96px] px-3 sm:px-4 py-2 sm:py-3 flex-wrap cursor-pointer overflow-hidden overflow-y-clip mx-auto">
      
      {/* Logo - Responsive sizing */}
      <div className="flex-grow flex pt-3 sm:pt-4 md:pt-6 justify-start md:hidden pl-[2rem] sm:pl-[0]">
        <Link href="/">
        <img 
          src="/assets/images/logo.svg"
          width={88} 
          height={15} 
          alt='logo'
          className="w-[70px] h-[12px] sm:w-[80px] sm:h-[14px] md:w-[88px] md:h-[15px]"
        />
        </Link>
      </div>

      {/* Right Icons - Responsive spacing */}
      <div className="flex items-center pt-3 sm:pt-4 md:pt-6 gap-2 sm:gap-3 pr-[2rem] sm:pr-[0]">
        <div
          className="cursor-pointer"
          onClick={() => setShowSearchField(!showSearchField)}
          style={{
            transition: 'all 0.3s ease',
            filter: 'brightness(1)',
            marginTop: '-4px',  // إزاحة إلى الأعلى قليلاً
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
        <img 
          src="/assets/images/searchIcon2.svg"
          width={26} 
          height={19} 
          alt='search'
          className="w-[25px] h-[25px] sm:w-[26px] sm:h-[19px]"
        />
        </div>
        <button
          className="pt-1 sm:pt-2"
          aria-label="Open menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <img 
            src="/assets/images/menuIcon.svg"
            width={44} 
            height={32} 
            alt="menu"
            className="w-[35px] h-[35px] sm:w-[44px] sm:h-[32px]"
          />
        </button>
      </div>

      {/* Platform Selection, Search Field, and Custom Select - Responsive sizing */}
      <div className="w-full sm:w-[392px] md:w-[146px] flex self-center justify-center items-center gap-1 sm:gap-2 h-[16px] sm:h-[18px] md:h-[30px] cursor-pointer md:pt-[1rem] md:pl-[3rem]">
        <div className="scale-50 sm:scale-60 md:scale-75">
          <PlatformSelection onStateChange={setShowPlatformSelection} />
        </div>
        
        {/* Search Field - appears when showSearchField is true */}
        <div
          style={{
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(1)',
            opacity: showSearchField ? 1 : 0,
            transform: `${showPlatformSelection ? 'translateX(65px)' : 'translateX(0px)'} ${showSearchField ? 'scale(1)' : 'scale(0.8)'}`,
            visibility: showSearchField ? 'visible' : 'hidden',
            maxWidth: showSearchField ? '120px' : '0px',
            overflow: 'hidden',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.filter = 'brightness(0.7)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = 'brightness(1)';
          }}
        >
          <div 
            className="h-[28px] sm:h-[35px] md:h-[30px] flex px-3 sm:px-4 py-1 justify-center items-center gap-2 rounded-2xl border border-black/20 backdrop-blur-sm transition-all duration-300"
            style={{
              background: 'rgba(77, 77, 77, 0.60)',
              minWidth: '100px',
              maxWidth: '120px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(35, 45, 60, 0.80)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(77, 77, 77, 0.60)';
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent border-none outline-none text-white placeholder-white/50 text-xs sm:text-sm font-semibold w-full"
              style={{ 
                fontFamily: 'Cairo, sans-serif',
                lineHeight: 'normal'
              }}
              autoFocus
            />
            <img 
              src="/assets/images/searchIcon2.svg" 
              width={12} 
              height={9} 
              alt='search'
              className="w-[15px] h-[15px] sm:w-[15px] sm:h-[20px]"
              style={{ filter: 'brightness(0.8)' }}
            />
          </div>
        </div>
        
        <div
          style={{
            transition: 'all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            filter: 'brightness(1)',
            cursor: 'pointer',
            transform: `${showPlatformSelection ? 'translateX(65px)' : 'translateX(0px)'} scale(0.85)`,
            transformOrigin: 'center center',
          }}
        >
          <CustomSelect/>
        </div>
      </div>

      {/* Side Menu Overlay */}
      <div
        className={`fixed inset-0 z-[999999999] transition-opacity duration-300 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        aria-hidden={!isMenuOpen}
        style={{ touchAction: 'none' }}
        onWheel={(e) => e.preventDefault()}
        onTouchMove={(e) => e.preventDefault()}
      >
        <div className="flex h-full w-full">
          {/* Left Half Dim Overlay */}
          <div
            className="w-1/2 h-full bg-black/60"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu overlay"
          />

          {/* Right Panel (Menu) - Responsive width */}
          <div
            className={`w-[60%] sm:w-1/2 h-full bg-[#4D4D4D] relative transform transition-transform duration-300 z-[999999999] ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          >
            {/* Close button - Responsive positioning */}
            <button
              aria-label="Close menu"
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 flex items-center justify-center hover:brightness-90 transition z-[9999999999]"
            >
              <svg 
                width="28" 
                height="20" 
                viewBox="0 0 42 30" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-[24px] h-[18px] sm:w-[28px] sm:h-[20px] md:w-[32px] md:h-[24px]"
              >
                <rect width="32" height="24" rx="12" fill="#333333" fillOpacity="0.8"/>
                <rect width="32" height="24" rx="12" stroke="url(#paint0_linear_close)" strokeWidth="1"/>
                <path d="M12 8L20 16M20 8L12 16" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_close" x1="16" y1="24" x2="16" y2="0" gradientUnits="userSpaceOnUse">
                    <stop stopOpacity="0.2"/>
                    <stop offset="1" stopColor="#666666"/>
                  </linearGradient>
                </defs>
              </svg>
            </button>

            {/* Content - Responsive spacing */}
            <div className="pt-12 sm:pt-14 md:pt-16 px-6 sm:px-8 md:px-10 text-white flex flex-col gap-5 sm:gap-6 md:gap-7">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center cursor-pointer"
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  <img 
                    src="/assets/images/profileIcon.svg"
                    width={32} 
                    height={32} 
                    alt='profile'
                    style={{
                      transition: 'all 0.3s ease',
                      filter: 'brightness(1)',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.filter = 'brightness(0.7)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.filter = 'brightness(1)';
                    }}
                  />
                </div>
                <span 
                  className={`text-sm cursor-pointer hover:brightness-75 transition-all duration-200 ${isProfileMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                  onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                >
                  Username
                </span>
              </div>

              {/* Profile Menu Items - Responsive sizing */}
              <div className={`overflow-hidden transition-all duration-700 ease-in-out ${isProfileMenuOpen ? 'max-h-80 sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                {/* Switch Profile */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <svg width="36" height="30" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30.0921 21.2712C29.9156 21.1442 29.7158 21.0531 29.5041 21.0033C29.2924 20.9536 29.073 20.946 28.8584 20.9811C28.6438 21.0162 28.4382 21.0932 28.2534 21.2078C28.0686 21.3224 27.9082 21.4723 27.7814 21.649C27.6463 21.8383 27.5061 22.0222 27.3609 22.2005C26.3696 20.54 24.9381 19.1863 23.2249 18.2892C24.1016 17.3448 24.6835 16.165 24.8993 14.8947C25.1151 13.6243 24.9552 12.3185 24.4394 11.1377C23.9236 9.95686 23.0743 8.95229 21.9957 8.24729C20.9171 7.54229 19.6561 7.16753 18.3675 7.16899C17.079 7.17046 15.8189 7.54809 14.7418 8.25555C13.6648 8.963 12.8178 9.9695 12.3047 11.1515C11.7916 12.3335 11.6347 13.6396 11.8534 14.9095C12.072 16.1794 12.6567 17.3578 13.5355 18.3002C11.8248 19.1962 10.3916 20.543 9.39124 22.1949C7.99066 20.4776 7.11471 18.3931 6.86826 16.1908C7.19687 16.4715 7.62227 16.6125 8.05348 16.5836C8.48469 16.5547 8.88747 16.3582 9.17567 16.0361C9.46386 15.714 9.61459 15.292 9.59562 14.8602C9.57664 14.4285 9.38947 14.0213 9.07414 13.7257L6.31679 10.9684C6.16309 10.8141 5.98045 10.6918 5.77936 10.6083C5.57826 10.5248 5.36266 10.4818 5.14491 10.4818C4.92717 10.4818 4.71157 10.5248 4.51047 10.6083C4.30937 10.6918 4.12674 10.8141 3.97304 10.9684L1.21568 13.7257C0.915393 14.036 0.748318 14.4514 0.750137 14.8832C0.751955 15.315 0.922523 15.729 1.22542 16.0368C1.52831 16.3445 1.93952 16.5216 2.37124 16.5303C2.80296 16.539 3.22096 16.3786 3.536 16.0833C3.69261 18.0338 4.23257 19.9342 5.12495 21.6757C6.01733 23.4171 7.24457 24.9654 8.73636 26.2317C8.81536 26.3123 8.90219 26.3848 8.99556 26.4482C11.6546 28.6132 14.9804 29.7923 18.4093 29.7858C21.8383 29.7792 25.1596 28.5874 27.8104 26.4123C27.8722 26.3674 27.9312 26.3186 27.9868 26.2662C28.9214 25.4775 29.7549 24.5764 30.4684 23.5833C30.5958 23.4068 30.6871 23.207 30.7371 22.9953C30.7871 22.7835 30.7949 22.5639 30.7599 22.3492C30.7249 22.1344 30.648 21.9286 30.5334 21.7437C30.4188 21.5587 30.2688 21.3982 30.0921 21.2712ZM18.3733 10.4817C19.0277 10.4817 19.6675 10.6758 20.2116 11.0393C20.7557 11.4029 21.1798 11.9197 21.4303 12.5243C21.6807 13.1289 21.7462 13.7942 21.6186 14.4361C21.4909 15.0779 21.1758 15.6675 20.713 16.1302C20.2503 16.593 19.6607 16.9081 19.0188 17.0358C18.377 17.1635 17.7117 17.0979 17.1071 16.8475C16.5025 16.597 15.9857 16.1729 15.6221 15.6288C15.2585 15.0847 15.0645 14.445 15.0645 13.7905C15.0645 12.913 15.4131 12.0714 16.0336 11.4508C16.6541 10.8303 17.4958 10.4817 18.3733 10.4817ZM18.3733 26.4744C16.0664 26.4771 13.8118 25.7869 11.9018 24.4932C12.4846 23.2706 13.4017 22.2382 14.547 21.5153C15.6923 20.7925 17.019 20.4089 18.3733 20.4089C19.7277 20.4089 21.0543 20.7925 22.1996 21.5153C23.3449 22.2382 24.2621 23.2706 24.8448 24.4932C22.9328 25.7827 20.6795 26.4725 18.3733 26.4744ZM35.5365 16.064L32.7791 18.8213C32.6254 18.9756 32.4428 19.0979 32.2417 19.1814C32.0406 19.2649 31.825 19.3079 31.6072 19.3079C31.3895 19.3079 31.1739 19.2649 30.9728 19.1814C30.7717 19.0979 30.5891 18.9756 30.4354 18.8213L27.678 16.064C27.3627 15.7684 27.1755 15.3612 27.1565 14.9295C27.1376 14.4977 27.2883 14.0757 27.5765 13.7536C27.8647 13.4316 28.2674 13.2351 28.6987 13.2061C29.1299 13.1772 29.5553 13.3182 29.8839 13.5989C29.6237 11.2715 28.6641 9.07761 27.1315 7.30678C25.599 5.53595 23.5655 4.27137 21.2995 3.6799C19.0335 3.08843 16.6415 3.19786 14.4389 3.99375C12.2364 4.78964 10.3269 6.2346 8.96247 8.13796C8.83872 8.32165 8.67935 8.47862 8.49381 8.59957C8.30827 8.72052 8.10033 8.80298 7.88232 8.84207C7.66432 8.88116 7.44068 8.87607 7.22468 8.82711C7.00867 8.77816 6.8047 8.68633 6.62484 8.55707C6.44499 8.42781 6.29292 8.26376 6.17765 8.07463C6.06239 7.88551 5.98627 7.67517 5.95381 7.45607C5.92135 7.23698 5.93322 7.0136 5.9887 6.79918C6.04418 6.58476 6.14215 6.38366 6.27681 6.20781C8.05565 3.72932 10.5529 1.85705 13.4307 0.844326C16.3085 -0.168399 19.4279 -0.272704 22.3669 0.545525C25.3059 1.36375 27.9226 3.06502 29.8631 5.41915C31.8035 7.77329 32.974 10.6667 33.2161 13.7078C33.5312 13.4125 33.9492 13.2521 34.3809 13.2607C34.8126 13.2694 35.2238 13.4466 35.5267 13.7543C35.8296 14.0621 36.0002 14.4761 36.002 14.9079C36.0038 15.3397 35.8368 15.7551 35.5365 16.0653V16.064Z" fill="white"/>
              </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Switch Profile</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/15 my-1 w-2/3" />
                </div>

                {/* Notifications */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.7572 13.5105C16.9759 12.1283 16.561 10.1442 16.561 7.77691C16.561 5.71434 15.7644 3.73626 14.3465 2.2778C12.9286 0.819351 11.0055 0 9.00023 0C6.99499 0 5.07188 0.819351 3.65396 2.2778C2.23605 3.73626 1.43947 5.71434 1.43947 7.77691C1.43947 10.1452 1.02633 12.1283 0.245047 13.5105C0.0856238 13.7925 0.00111693 14.1126 1.09961e-05 14.4387C-0.00109493 14.7649 0.081239 15.0856 0.238746 15.3687C0.395257 15.6519 0.622422 15.887 0.896791 16.0498C1.17116 16.2125 1.48279 16.297 1.7995 16.2945H5.05603C5.14535 17.307 5.59952 18.2485 6.32933 18.9342C7.05913 19.6198 8.01182 20 9.00023 20C9.98864 20 10.9413 19.6198 11.6711 18.9342C12.4009 18.2485 12.8551 17.307 12.9444 16.2945H16.201C16.5172 16.2965 16.8283 16.2118 17.1021 16.0491C17.376 15.8863 17.6027 15.6515 17.759 15.3687C17.9172 15.086 18.0003 14.7655 18 14.4393C17.9997 14.1132 17.916 13.7929 17.7572 13.5105ZM9.00023 17.7758C8.58523 17.7759 8.18295 17.6285 7.86147 17.3585C7.53999 17.0886 7.31905 16.7127 7.23605 16.2945H10.7644C10.6814 16.7127 10.4605 17.0886 10.139 17.3585C9.81751 17.6285 9.41523 17.7759 9.00023 17.7758ZM2.39896 14.0725C3.19554 12.406 3.59969 10.2896 3.59969 7.77691C3.59969 6.30365 4.16867 4.89073 5.18147 3.84898C6.19427 2.80722 7.56792 2.22197 9.00023 2.22197C10.4325 2.22197 11.8062 2.80722 12.819 3.84898C13.8318 4.89073 14.4008 6.30365 14.4008 7.77691C14.4008 10.2887 14.804 12.406 15.6006 14.0725H2.39896Z" fill="white"/>
              </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Notifications</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/15 my-1 w-2/3" />
                </div>

                {/* History */}
                  <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.3845 4.68002V8.38892L13.3415 10.2339C13.461 10.3055 13.5657 10.4011 13.6494 10.5151C13.733 10.6292 13.794 10.7595 13.8287 10.8984C13.8634 11.0372 13.8711 11.1819 13.8515 11.3239C13.8318 11.4659 13.7852 11.6024 13.7142 11.7254C13.6433 11.8485 13.5495 11.9556 13.4383 12.0405C13.3271 12.1254 13.2008 12.1865 13.0667 12.22C12.9325 12.2536 12.7933 12.2591 12.6572 12.2361C12.521 12.2131 12.3906 12.1621 12.2736 12.0861L8.8121 9.92611C8.65827 9.8302 8.53094 9.69449 8.44253 9.53219C8.35411 9.3699 8.30762 9.18655 8.30759 9.00002V4.68002C8.30759 4.39359 8.417 4.11889 8.61174 3.91635C8.80649 3.71381 9.07062 3.60002 9.34604 3.60002C9.62145 3.60002 9.88558 3.71381 10.0803 3.91635C10.2751 4.11889 10.3845 4.39359 10.3845 4.68002ZM9.34604 2.96534e-05C8.20815 -0.00301753 7.081 0.228812 6.02988 0.682085C4.97877 1.13536 4.0246 1.80106 3.22265 2.64063C2.81679 3.06722 2.44382 3.48392 2.0769 3.90062V3.24002C2.0769 2.95359 1.96749 2.67889 1.77274 2.47635C1.578 2.27381 1.31386 2.16003 1.03845 2.16003C0.763035 2.16003 0.498901 2.27381 0.304155 2.47635C0.109408 2.67889 0 2.95359 0 3.24002V6.84002C0 7.12645 0.109408 7.40115 0.304155 7.60369C0.498901 7.80623 0.763035 7.92002 1.03845 7.92002H4.49994C4.77536 7.92002 5.03949 7.80623 5.23424 7.60369C5.42899 7.40115 5.53839 7.12645 5.53839 6.84002C5.53839 6.55359 5.42899 6.27888 5.23424 6.07634C5.03949 5.87381 4.77536 5.76002 4.49994 5.76002H3.26852C3.72111 5.22002 4.18581 4.69982 4.69552 4.16342C5.60949 3.21261 6.77263 2.563 8.03958 2.29579C9.30653 2.02858 10.6211 2.15561 11.819 2.66101C13.017 3.16641 14.0451 4.02776 14.775 5.13743C15.5049 6.2471 15.9041 7.55587 15.9229 8.90019C15.9416 10.2445 15.579 11.5648 14.8803 12.696C14.1817 13.8272 13.178 14.7192 11.9946 15.2605C10.8113 15.8018 9.50082 15.9684 8.22695 15.7394C6.95309 15.5105 5.77234 14.8963 4.83225 13.9734C4.63188 13.7767 4.3646 13.6709 4.0892 13.6791C3.81379 13.6874 3.55283 13.8091 3.36371 14.0175C3.17459 14.2259 3.07281 14.5039 3.08077 14.7903C3.08872 15.0767 3.20575 15.3481 3.40611 15.5448C4.43333 16.5532 5.6823 17.2848 7.04396 17.6756C8.40562 18.0665 9.83858 18.1047 11.2177 17.787C12.5969 17.4693 13.8803 16.8053 14.9559 15.853C16.0315 14.9007 16.8665 13.689 17.3882 12.3238C17.9099 10.9586 18.1023 9.48129 17.9486 8.02092C17.795 6.56055 17.2999 5.1615 16.5066 3.94593C15.7134 2.73036 14.6461 1.73522 13.3979 1.0474C12.1497 0.359581 10.7586 -8.01439e-06 9.34604 2.96534e-05Z" fill="white"/>
                    </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">History</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/15 my-1 w-2/3" />
                </div>

                {/* Settings */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 4.69308C8.14795 4.69308 7.31504 4.94567 6.60658 5.41892C5.89813 5.89217 5.34596 6.56482 5.01989 7.35181C4.69383 8.1388 4.60851 9.00478 4.77474 9.84024C4.94097 10.6757 5.35127 11.4431 5.95376 12.0455C6.55625 12.6478 7.32387 13.058 8.15954 13.2242C8.99522 13.3904 9.86142 13.3051 10.6486 12.9791C11.4358 12.6531 12.1086 12.1011 12.582 11.3928C13.0554 10.6845 13.308 9.85183 13.308 9C13.3067 7.85814 12.8524 6.76342 12.0448 5.956C11.2372 5.14858 10.1422 4.69439 9 4.69308ZM9 11.3191C8.5412 11.3191 8.09271 11.1831 7.71124 10.9283C7.32976 10.6734 7.03244 10.3112 6.85686 9.88749C6.68129 9.46372 6.63535 8.99743 6.72486 8.54756C6.81437 8.0977 7.0353 7.68447 7.35971 7.36014C7.68413 7.03581 8.09747 6.81493 8.54745 6.72545C8.99743 6.63596 9.46384 6.68189 9.88772 6.85742C10.3116 7.03295 10.6739 7.33019 10.9288 7.71157C11.1837 8.09295 11.3197 8.54132 11.3197 9C11.3197 9.61507 11.0753 10.2049 10.6403 10.6399C10.2053 11.0748 9.61523 11.3191 9 11.3191ZM16.6219 9.06543V8.93457L17.7818 7.48429C17.8791 7.36278 17.9466 7.22009 17.9787 7.06774C18.0108 6.91538 18.0066 6.75762 17.9665 6.60717C17.7572 5.81793 17.4444 5.05985 17.0361 4.35266C16.9575 4.21781 16.8482 4.10337 16.7171 4.01861C16.5859 3.93386 16.4367 3.88117 16.2814 3.86482L14.4356 3.65776L14.3436 3.56582L14.1365 1.71964C14.12 1.56454 14.0673 1.4155 13.9825 1.28456C13.8977 1.15363 13.7833 1.04447 13.6485 0.96593C12.9411 0.556515 12.1825 0.242635 11.3926 0.0324875C11.242 -0.0069884 11.0842 -0.0105409 10.932 0.0221161C10.7797 0.0547732 10.6373 0.122727 10.5161 0.220501L9.06545 1.38006H8.93455L7.4839 0.220501C7.36235 0.123166 7.21963 0.0557401 7.06724 0.0236581C6.91484 -0.00842386 6.75704 -0.00426459 6.60655 0.0358006C5.8169 0.246352 5.05862 0.560506 4.35146 0.970072C4.21709 1.04829 4.10295 1.15692 4.0182 1.28725C3.93346 1.41757 3.88047 1.56596 3.86349 1.72047L3.65637 3.56582L3.56441 3.65776L1.71776 3.86482C1.56262 3.88129 1.41354 3.93404 1.28257 4.01879C1.1516 4.10354 1.04241 4.21791 0.963851 4.35266C0.55548 5.06008 0.242636 5.81845 0.0334803 6.608C-0.00645839 6.75833 -0.0105485 6.91593 0.0215392 7.06813C0.0536269 7.22033 0.120997 7.36287 0.218229 7.48429L1.37809 8.93457V9.06543L0.218229 10.5157C0.120868 10.6372 0.053425 10.7799 0.0213347 10.9323C-0.0107556 11.0846 -0.00659521 11.2424 0.0334803 11.3928C0.244348 12.1823 0.558862 12.9404 0.968822 13.6473C1.04698 13.7816 1.15551 13.8956 1.28572 13.9803C1.41592 14.065 1.56418 14.1181 1.71859 14.1352L3.56441 14.3406L3.65637 14.4325L3.86349 16.2804C3.87997 16.4355 3.93273 16.5845 4.0175 16.7154C4.10227 16.8464 4.21667 16.9555 4.35146 17.0341C5.05888 17.4435 5.81746 17.7574 6.60738 17.9675C6.758 18.007 6.9158 18.0105 7.06804 17.9779C7.22029 17.9452 7.36273 17.8773 7.4839 17.7795L8.93455 16.6199H9.06545L10.5161 17.7795C10.6376 17.8768 10.7804 17.9443 10.9328 17.9763C11.0852 18.0084 11.243 18.0043 11.3934 17.9642C12.1829 17.755 12.9412 17.4422 13.6485 17.0341C13.7832 16.956 13.8977 16.8475 13.9827 16.7172C14.0678 16.5868 14.121 16.4383 14.1382 16.2837L14.3436 14.4383L14.4356 14.3464L16.2822 14.1352C16.4369 14.118 16.5855 14.0648 16.7158 13.9798C16.8462 13.8948 16.9548 13.7803 17.0328 13.6457C17.4424 12.9384 17.7563 12.1801 17.9665 11.3903C18.0062 11.2403 18.0101 11.083 17.9781 10.9311C17.946 10.7792 17.8787 10.6369 17.7818 10.5157L16.6219 9.06543ZM14.6236 8.66042C14.6369 8.88661 14.6369 9.11339 14.6236 9.33958C14.6088 9.58547 14.6859 9.8281 14.8399 10.0204L15.9036 11.3498C15.8032 11.6469 15.6834 11.9372 15.5449 12.2186L13.8523 12.4066C13.6073 12.4346 13.3814 12.5527 13.2186 12.7379C13.0681 12.9074 12.9076 13.0678 12.7381 13.2183C12.5528 13.3811 12.4347 13.6069 12.4067 13.8519L12.2194 15.5432C11.938 15.6822 11.6476 15.8026 11.3504 15.9035L10.0207 14.8392C9.84421 14.6984 9.62508 14.6219 9.39932 14.6222C9.37944 14.6222 9.35956 14.6222 9.33967 14.6222C9.11342 14.6354 8.88658 14.6354 8.66033 14.6222C8.41454 14.6076 8.17203 14.6843 7.97933 14.8375L6.64963 15.9018C6.3524 15.8015 6.06209 15.6817 5.78057 15.5432L5.59251 13.8511C5.56449 13.6061 5.44638 13.3803 5.26112 13.2175C5.09156 13.067 4.93111 12.9066 4.78061 12.7371C4.61777 12.5519 4.39188 12.4338 4.14683 12.4058L2.4551 12.2186C2.31605 11.9372 2.19567 11.647 2.09471 11.3498L3.15847 10.0204C3.31244 9.8281 3.3895 9.58547 3.3747 9.33958C3.36144 9.11339 3.36144 8.88661 3.3747 8.66042C3.3895 8.41453 3.31244 8.1719 3.15847 7.97959L2.09637 6.65024C2.19678 6.35309 2.31662 6.06285 2.4551 5.7814L4.14766 5.59339C4.39271 5.56538 4.6186 5.4473 4.78144 5.26209C4.93194 5.09257 5.09239 4.93216 5.26195 4.7817C5.44721 4.6189 5.56532 4.39307 5.59334 4.14808L5.78057 2.45679C6.06205 2.31778 6.35236 2.19743 6.64963 2.0965L7.97933 3.1608C8.17203 3.31402 8.41454 3.39071 8.66033 3.37615C8.88658 3.3629 9.11342 3.3629 9.33967 3.37615C9.58552 3.39119 9.82819 3.31445 10.0207 3.1608L11.3504 2.0965C11.6476 2.19743 11.938 2.31778 12.2194 2.45679L12.4075 4.14891C12.4355 4.3939 12.5536 4.61973 12.7389 4.78253C12.9084 4.93299 13.0689 5.0934 13.2194 5.26292C13.3822 5.44812 13.6081 5.56621 13.8532 5.59422L15.5449 5.7814C15.6839 6.06281 15.8043 6.35305 15.9053 6.65024L14.8415 7.97959C14.687 8.17166 14.6093 8.41431 14.6236 8.66042Z" fill="white"/>
              </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">Settings</span>
                </div>
                <div className="flex justify-start">
                  <hr className="border-white/15 my-1 w-2/3" />
                </div>


                {/* log out */}
                <div className="flex items-center gap-2 cursor-pointer hover:brightness-75 transition-all duration-200">
                  <div className="w-3 h-3 sm:w-4 sm:h-4 flex items-center justify-center">
                  <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12.8825 25.9191C12.8825 26.3579 12.7082 26.7787 12.3979 27.089C12.0876 27.3992 11.6668 27.5735 11.2281 27.5735H2.40453C1.96576 27.5735 1.54495 27.3992 1.23469 27.089C0.924425 26.7787 0.750122 26.3579 0.750122 25.9191V1.65441C0.750122 1.21563 0.924425 0.794828 1.23469 0.484566C1.54495 0.174304 1.96576 0 2.40453 0H11.2281C11.6668 0 12.0876 0.174304 12.3979 0.484566C12.7082 0.794828 12.8825 1.21563 12.8825 1.65441C12.8825 2.09319 12.7082 2.514 12.3979 2.82426C12.0876 3.13452 11.6668 3.30882 11.2281 3.30882H4.05895V24.2647H11.2281C11.6668 24.2647 12.0876 24.439 12.3979 24.7493C12.7082 25.0595 12.8825 25.4803 12.8825 25.9191ZM27.8397 12.6163L22.325 7.10156C22.0142 6.79076 21.5927 6.61616 21.1532 6.61616C20.7136 6.61616 20.2921 6.79076 19.9813 7.10156C19.6705 7.41236 19.4959 7.8339 19.4959 8.27344C19.4959 8.71298 19.6705 9.13451 19.9813 9.44531L22.6711 12.1324H11.2281C10.7893 12.1324 10.3685 12.3067 10.0582 12.6169C9.74795 12.9272 9.57365 13.348 9.57365 13.7868C9.57365 14.2255 9.74795 14.6463 10.0582 14.9566C10.3685 15.2669 10.7893 15.4412 11.2281 15.4412H22.6711L19.9799 18.131C19.6691 18.4418 19.4945 18.8633 19.4945 19.3028C19.4945 19.7424 19.6691 20.1639 19.9799 20.4747C20.2907 20.7855 20.7122 20.9601 21.1518 20.9601C21.5913 20.9601 22.0128 20.7855 22.3237 20.4747L27.8384 14.96C27.9927 14.8064 28.1152 14.6238 28.1988 14.4228C28.2824 14.2217 28.3255 14.0062 28.3256 13.7884C28.3258 13.5707 28.2829 13.3551 28.1995 13.1539C28.1161 12.9528 27.9939 12.7701 27.8397 12.6163Z" fill="white"/>
            </svg>
                  </div>
                  <span className="text-[10px] sm:text-xs">log out</span>
                </div>
              </div>

              {/* Navigation - Responsive text size */}
              <nav className="flex flex-col gap-4 sm:gap-5 text-xs sm:text-sm">
                <Link href="/" className="hover:brightness-75 transition-all duration-200">Home</Link>
                <Link href="/tv-shows" className="hover:brightness-75 transition-all duration-200">TV Shows</Link>
                <Link href="/movies" className="hover:brightness-75 transition-all duration-200">Movies</Link>
                <Link href="/anime" className="hover:brightness-75 transition-all duration-200">Anime</Link>
                <Link href="/new" className="hover:brightness-75 transition-all duration-200">New</Link>
                <Link href="/my-list" className="hover:brightness-75 transition-all duration-200">My List</Link>
              </nav>

              <hr className="mt-3 sm:mt-4 border-white/15 w-2/3" />

              {/* Logout Button - Responsive sizing */}
              <button className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm mt-2 hover:brightness-90 transition" onClick={() => setIsMenuOpen(false)}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="w-[12px] h-[12px] sm:w-[14px] sm:h-[14px] md:w-[16px] md:h-[16px]">
                  <path d="M3 3C3 1.34 4.34 0 6 0H10C11.66 0 13 1.34 13 3V13C13 14.66 11.66 16 10 16H6C4.34 16 3 14.66 3 13V3ZM11.5 8.5L14.5 11.5L16 10L13 7H7V9H13L16 6L14.5 4.5L11.5 7.5V8.5Z" fill="white"/>
                </svg>
                <span>Log Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>

     </div>

    </div>
  );
}