import React from 'react';
import Hero from '../../components/layout/Hero/Hero';
import FipDates from '../../components/layout/FipDates/FipDates';
import LazySection from '../../components/common/LazySection';

// Lazy load components
const FipNews = React.lazy(() => import('../../components/layout/FipNews/FipNews'));
const FipRubros = React.lazy(() => import('../../components/layout/FipRubros/FipRubros'));
const FipJury = React.lazy(() => import('../../components/layout/FipJury/FipJury'));
const FipParallax = React.lazy(() => import('../../components/layout/FipParallax/FipParallax'));
const FipRankings = React.lazy(() => import('../../components/layout/FipRankings/FipRankings'));
const FipWinningCases = React.lazy(() => import('../../components/layout/FipWinningCases/FipWinningCases'));
const FipSocials = React.lazy(() => import('../../components/layout/FipSocials/FipSocials'));

const Home: React.FC = () => {
    return (
        <>
            <Hero />

            <LazySection>
                <FipDates />
            </LazySection>

            <LazySection>
                <FipNews />
            </LazySection>

            <LazySection>
                <FipRubros />
            </LazySection>

            <LazySection>
                <FipJury />
            </LazySection>

            <LazySection>
                <FipParallax />
            </LazySection>

            <LazySection>
                <FipRankings />
            </LazySection>

            <LazySection>
                <FipWinningCases />
            </LazySection>

            <LazySection>
                <FipSocials />
            </LazySection>
        </>
    );
};

export default Home;
