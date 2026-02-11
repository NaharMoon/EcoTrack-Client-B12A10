import React from 'react';

import Footer from '../../components/Footer2';
import HeroCarousel from '../../components/HeroCarousel ';
import HeroBanner from '../../components/HeroBanner ';
import StatsSection from '../../components/StatsSection ';
import HowItWorks from '../../components/HowItWorks ';
import GoGreenSection from '../../components/GoGreenSection ';
import FeaturedChallenges from '../../components/FeaturedChallenges ';
import RecentTips from '../../components/RecentTips';
import UpcomingEvents from '../../components/UpcomingEvents';


const HomePage = () => {
    
    return (
        <div>
            <HeroBanner></HeroBanner>
            <StatsSection></StatsSection>
            <HeroCarousel></HeroCarousel>
            <GoGreenSection></GoGreenSection>
            <FeaturedChallenges></FeaturedChallenges>
            <RecentTips></RecentTips>
            <UpcomingEvents></UpcomingEvents>
            <HowItWorks></HowItWorks>
            
        </div>
    );
};

export default HomePage;