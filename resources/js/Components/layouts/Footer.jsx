import { Link } from '@inertiajs/react';


const Footer = () => {
    return (
               <footer
      className="w-full h-[351px]  md:h-[271px] flex flex-col items-center justify-center overflow-x-hidden"
      style={{
        background:'hsla(216, 19%, 5%, 1)',
        backgroundImage: `
      
          url('/assets/images/footer-bg.svg')
        `,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
              <div className=" justify-items-center">
                <svg width="150" height="27" viewBox="0 0 150 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.7452 1.01727C7.23617 1.01727 7.66319 1.35036 7.7849 1.82621L10.4935 12.4894C11.0236 14.6266 11.4259 16.6727 11.8013 18.8306H11.9499C12.3067 16.6272 12.7049 14.6948 13.2103 12.4894L15.8178 1.83449C15.9354 1.3545 16.3644 1.0152 16.8595 1.0152H22.1859C22.9203 1.0152 23.4381 1.73932 23.2008 2.43861L15.4464 25.2484C15.2979 25.6849 14.8895 25.9766 14.4315 25.9766H8.7297C8.26967 25.9766 7.86122 25.6828 7.7127 25.2442L0.0573318 2.43447C-0.177837 1.73725 0.339947 1.01727 1.07227 1.01727H6.7452Z" fill="white"/>
               <path d="M98.8568 24.1725C98.9311 24.6773 98.6217 25.1594 98.1183 25.3125C96.8373 25.7014 94.9477 25.9952 92.8538 25.9952C85.3326 25.9952 80.5137 21.396 80.5137 13.741C80.5137 6.5764 85.3553 1.00482 93.8997 1.00482C95.4015 1.00482 96.961 1.22413 98.2029 1.5655C98.7331 1.71032 99.0487 2.23789 98.9414 2.75926L98.2524 6.13158C98.1328 6.71708 97.5263 7.06259 96.9301 6.91156C96.2246 6.73157 95.3437 6.60123 94.2463 6.60123C90.4196 6.60123 88.0184 9.45219 88.0411 13.4679C88.0411 17.8706 90.76 20.3202 94.3123 20.3202C95.3561 20.3202 96.2494 20.2022 97.0374 19.9995C97.6542 19.8402 98.273 20.2416 98.3638 20.8519L98.8589 24.1725H98.8568Z" fill="white"/>
             <path d="M118.441 25.9952C117.929 25.9952 117.492 25.6269 117.405 25.12L117.137 23.5663H116.99C115.476 25.4986 113.164 26.5 110.492 26.5C105.906 26.5 103.039 23.0656 103.039 19.0271C103.039 12.6321 108.712 9.72941 116.415 9.72113V9.33838C116.415 7.84877 115.59 6.1233 112.256 6.12743C110.418 6.12743 108.594 6.59914 107.132 7.2674C106.554 7.53222 105.878 7.19913 105.704 6.58673L104.955 3.92818C104.813 3.42544 105.063 2.89993 105.535 2.67856C107.282 1.85927 110.111 1.00067 113.64 1.00067C121.553 1.00067 123.717 5.93709 123.717 11.4507V20.1609C123.717 21.847 123.781 23.4959 123.93 24.8304C124 25.4511 123.507 25.9911 122.884 25.9911H118.443L118.441 25.9952ZM116.629 15.4024C116.629 14.7982 116.122 14.31 115.522 14.3472C112.555 14.5334 110.123 15.543 110.123 18.2719C110.123 20.3781 111.429 21.3174 112.939 21.3174C114.556 21.3174 116.006 20.2602 116.489 18.7168C116.6 18.3464 116.629 17.8975 116.629 17.4713V15.4024Z" fill="white"/>
          <path d="M127.868 8.93909C127.868 6.3964 127.795 4.16404 127.713 2.14892C127.688 1.53239 128.175 1.02137 128.783 1.02137H133.124C133.673 1.02137 134.13 1.43929 134.19 1.99169L134.44 4.34404H134.584C135.669 2.60408 138.091 0.5 141.778 0.5C146.751 0.5 150 4.05232 150 10.9418V25.1614C150 25.7614 149.52 26.2476 148.928 26.2476H143.644C143.052 26.2476 142.572 25.7614 142.572 25.1614V11.7238C142.572 8.81289 141.623 6.6426 139.081 6.6426C137.262 6.6426 136.101 7.9336 135.585 9.39632C135.391 9.89286 135.292 10.6666 135.292 11.4507V25.1594C135.292 25.7593 134.811 26.2455 134.219 26.2455H128.936C128.344 26.2455 127.863 25.7593 127.863 25.1594V8.93909H127.868Z" fill="white"/>
        <path d="M64.0664 25.9952C60.0293 25.9952 56.3182 24.1063 53.884 20.8146C53.0794 19.7264 53.3167 18.1913 54.4121 17.3927C54.8391 17.0823 55.3424 16.9168 55.8705 16.9168C56.6524 16.9168 57.395 17.2892 57.8591 17.9161C59.3547 19.9395 61.6198 21.0981 64.0684 21.0981C68.3592 21.0981 71.8496 17.6327 71.8496 13.3707C71.8496 9.10874 68.3592 5.64332 64.0684 5.64332C61.1433 5.64332 58.3893 7.19293 56.8813 9.68804L50.9134 19.5733C48.5205 23.5332 44.1492 25.9911 39.5015 25.9911C32.4919 25.9911 26.79 20.3284 26.79 13.3686C26.79 6.40881 32.4898 0.752411 39.4995 0.752411C43.5654 0.752411 47.2786 2.64546 49.6901 5.94331C50.4885 7.03569 50.243 8.56876 49.1435 9.36115C48.7185 9.66735 48.2193 9.82872 47.6974 9.82872C46.9094 9.82872 46.1626 9.45011 45.7005 8.8191C44.2276 6.80398 41.9667 5.64745 39.4995 5.64745C35.2087 5.64745 31.7183 9.11288 31.7183 13.3748C31.7183 17.6368 35.2087 21.1022 39.4995 21.1022C42.4246 21.1022 45.1786 19.5526 46.6866 17.0575L52.6504 7.17845C55.0454 3.21442 59.4187 0.75448 64.0664 0.75448C71.076 0.75448 76.7779 6.41709 76.7779 13.3769C76.7779 20.3367 71.076 25.9993 64.0664 25.9993V25.9952Z" fill="white"/>
        </svg>

        <nav className=" hidden md:flex  pt-12 gap-[20px]  items-center w-[453px]  h-[37px]">

      <Link
        href="/"
        className=" w-[51px] h-[37px]  relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        Home
      </Link>
      <Link
        href="/tv-shows"
        className="w-[82px] h-[37px]   relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        Tv Shows
      </Link>
      <Link
        href="/movies"
        className="w-[62px] h-[37px]  relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        Movies
      </Link>
      <Link
        href="/anime"
        className="w-[55px] h-[37px]  relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        Anime
      </Link>
      <Link
        href="/new"
        className=" w-[37px] h-[37px]  relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        New
      </Link>
       <Link
        href="/my-list"
        className=" w-[65px] h-[37px] relative text-[#FFFFFF] font-cairo text-[16px] leading-none text-center 
               after:content-[''] after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[2px] after:bg-white 
               hover:after:w-full after:transition-all after:duration-300"
      >
        My List
      </Link>
    </nav>

    <div className=" pt-[3rem] text-white hover:text-gray-300 font-inter font-normal text-base leading-none text-[12px] text-center">
      All rights reserved to voocan 2025
    </div>

              </div>
           </footer>
    );
};

export default Footer;
