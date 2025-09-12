
import React, { useState, useEffect } from 'react';
// Note: Components will need to be created in Laravel structure
import Footer from '../Components/layouts/Footer';
import Header from '../Components/layouts/Header';
import CategorySlider from '../Components/slider/Slider';
import LoveButton from '../Components/custom/LoveButton';
import GradientButton from '../Components/custom/HeroButton';
import MobileHeader from '../Components/TabAndMobHeader/MobileHeader';
import TabletHeader from '../Components/TabAndMobHeader/TabletHeader';

export default function HomePage() {
  const [heroData, setHeroData] = useState(
  {  id:null,
    title:'Untitled',
    description:'',
    poster:null,
    backdrop:null,
    rating:null,
    genres:[],
    releasedDate:null,
    runtime:'',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getHeroData =()=>{
    const token = localStorage.getItem('access_token');
    fetch('/api/hero',{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': token ? `Bearer ${token}` : '',
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      if (data.status === 'success') {
        setHeroData(data.data);
      } else {
        throw new Error('Failed to fetch hero section data');
      }
    })
    .catch(error => {
      console.error('Error fetching hero section data:', error);
      setError(error.message);
    })
    .finally(() => {
      setLoading(false);
    });
  }
  // if (response.status === 401) {
  //   localStorage.removeItem('access_token');
  //   window.location.href = '/login';
  //   return;
  // }
  useEffect(() => {
    getHeroData();
  }, []);


  const formatGenres = (genres) => {
    if (!genres || genres.length === 0) return 'Historical Drama & Action';
    return genres.slice(0, 2).join(' & ');
  };

  const getYear = (releaseDate) => {
    if (!releaseDate) return '2019';
    return new Date(releaseDate).getFullYear().toString();
  };
  return (
    <div className="min-h-screen bg-[#0A0C0F] overflow-x-hidden">
      {/* Header Section - Fixed at top */}
      <section className="fixed top-0 left-0 w-full z-[9999] overflow-x-hidden">
        {/* Mobile Header - Show on xs and sm (up to md breakpoint) */}
        <div className="block md:hidden">
          <MobileHeader />
        </div>
        {/* Tablet Header - Show on md only */}
        <div className="hidden md:block lg:hidden">
          <TabletHeader />
        </div>
        {/* Desktop Header - Show on lg and up */}
        <div className="hidden lg:block">
          <Header />
        </div>
      </section>

      {/* Hero Section */}
      <section
        className="relative h-[600px] sm:h-[700px] md:h-[800px] lg:h-[1024px] w-full bg-cover bg-center overflow-x-hidden"
        style={{
          backgroundImage: `url('${heroData?.backdrop || '/assets/images/HeroImageContainer.svg'}')`,
        }}
      >
        {/* Gradient overlay - darker on left, lighter on right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.2) 70%, rgba(0,0,0,0.05) 100%)',
            zIndex: 1,
          }}
        />
        
        {/* Bottom fade overlay */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "100px",
            background: "linear-gradient(to bottom, transparent 0%, rgba(10, 12, 15, 0.3) 50%, rgba(10, 12, 15, 1) 100%)",
            pointerEvents: "none",
          }}
        />
        
        {/* Hero Content */}
        <div className="relative pt-[10rem] sm:pt-[12rem] md:pt-[15rem] lg:pt-[18rem] px-[2rem] sm:px-[3.5rem] md:px-[4rem] lg:ml-[1.5rem] z-20 flex flex-col h-full text-white items-start">
          {/* Loading State */}
          {loading && (
            <div className="flex items-center justify-center w-full h-32">
              <div className="text-white text-lg">Loading...</div>
            </div>
          )}
          
          {/* Error State */}
          {error && !loading && (
            <div className="flex items-center justify-center w-full h-32">
              <div className="text-red-400 text-lg">Error loading movie data</div>
            </div>
          )}
          
          {/* Movie Content */}
          {!loading && !error && (
            <>
              {/* Movie Poster */}
              <img 
                src={heroData?.poster || "/assets/images/1917.svg"}
                width={300} 
                height={124} 
                alt={heroData?.title || '1917'} 
                className="w-[140px] h-[60px] sm:w-[160px] sm:h-[65px] md:w-[180px] md:h-[70px] lg:w-[300px] lg:h-[124px]"
              />
          
              {/* Movie Info */}
              <div
                className="flex flex-wrap gap-[5px] sm:gap-2 md:gap-[10px] pt-4 sm:pt-6 md:pt-8 text-white pb-4 sm:pb-[1rem] md:pb-8 
                justify-start lg:ml-4 
                w-full max-w-[90%] lg:max-w-none
                text-[10px] sm:text-sm md:text-sm"
                style={{
                  fontFamily: "Cairo, sans-serif",
                  lineHeight: "100%",
                }}
              >
                {/* Year */}
                <span className="w-[fit-content] sm:w-[36px] h-[25px] sm:h-[30px] inline-block">
                  {getYear(heroData?.releasedDate)}
                </span>

                {/* Dot */}
                <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

                {/* Genre */}
                <span className="w-[fit-content] h-[25px] sm:h-[30px] inline-block">
                  {formatGenres(heroData?.genres)}
                </span>

                {/* Dot */}
                <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

                {/* Duration */}
                <span className="w-[fit-content] sm:w-[53px] h-[25px] sm:h-[30px] inline-block">
                  {heroData?.runtime}
                </span>

                {/* Dot */}
                <span className="w-[8px] sm:w-[10px] h-[8px] sm:h-[10px] rounded-full bg-[#D9D9D9] inline-block"></span>

                {/* Rating */}
                <span className="w-[fit-content] sm:w-[88px] h-[25px] sm:h-[30px] text-[#0b9b04] font-bold inline-block">
                  {heroData?.rating ? `${heroData.rating}/10 IMDb` : 'no rating/10 IMDb'}
                </span>
              </div>

              {/* Movie Description */}
              <div className="lg:pl-2 justify-start md:pl-0 text-start text-xs sm:text-sm lg:text-base my-4 sm:my-6 font-cairo text-[hsla(0, 0%, 100%, 1)] leading-relaxed sm:leading-loose">
                {heroData?.description ? (
                  <p className="mb-2 sm:mb-3 lg:w-[40rem] md:w-[35rem]">{heroData.description}</p>
                ) : (
                  <>
                    <p className="mb-2 sm:mb-3">No description available</p>
                  </>
                )}
              </div>
              
              {/* Action Buttons */}
              <div className="flex items-start pt-2 sm:pt-4 gap-2 sm:gap-4">
                <GradientButton />
                <LoveButton />
              </div>
            </>
          )}
        </div>
      </section>

      {/* Category Sections */}
      <section className="bg-[#0A0C0F]">
        {/* First Category */}
        <div className="font-cairo font-bold sm:text-[24px] text-[12px] text-[#FFFFFF] bg-[#0A0C0F] pl-[2rem] sm:pl-6 md:pl-[5rem]">
          Category (Trend - New - Continue watching)
        </div>
        <CategorySlider/>
        
        {/* Second Category */}
        <div className="font-cairo font-bold sm:text-[24px] text-[12px] text-[#FFFFFF] bg-[#0A0C0F] pl-[2rem] sm:pl-6 md:pl-[5rem]">
          Category (Trend - New - Continue watching)
        </div>
        <CategorySlider/>
        
        {/* Third Category */}
        <div className="font-cairo font-bold sm:text-[24px] text-[12px] text-[#FFFFFF] bg-[#0A0C0F] pl-[2rem] sm:pl-6 md:pl-[5rem]">
          Category (Trend - New - Continue watching)
        </div>
        <CategorySlider/>
      </section>

      {/* Background Section */}
      <section
        className="relative w-full h-[200vh] sm:h-[250vh] md:h-[290vh] bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/images/Homepage.svg')",
          backgroundPosition: "left bottom",
          backgroundSize: "cover", 
          backgroundRepeat: "no-repeat",
          backgroundColor: "#0A0C0F",
          outline: "none",
          border: "none",
        }}
      />
      
      <Footer/>
    </div>
  );
}





