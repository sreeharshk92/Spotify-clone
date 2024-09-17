import React from 'react'
import LogoSection from './SideSection/LogoSection'
import LibrarySection from './SideSection/LibrarySection'
import Header from './MainSection/Header'
import PopularSection from './MainSection/PopularSection'
import PopularSection2 from './MainSection/PopularSection2'
import PopularSection3 from './MainSection/PopularSection3'
import FeaturedCharts from './MainSection/FeaturedCharts'
import SpotifyPlaylists from './MainSection/SpotifyPlaylists'
import TrendingEpisodes from './MainSection/TrendingEpisodes'
import Footer from './MainSection/Footer'
import BottomBox from './BottomBox/BottomBox'

function Home() {
    return (
        <div className='bg-black min-h-screen flex flex-col '>
            <section className='flex'>

            
            <section>
                <LogoSection />
                <LibrarySection />
            </section>

            <section className='w-full pr-2 pl-4'>
                <Header />
                <PopularSection />
                <PopularSection2 />
                <PopularSection3 />
                <FeaturedCharts />
                <SpotifyPlaylists />
                <TrendingEpisodes />
                <Footer />
            </section>
            </section>

            <BottomBox />


        </div>
    )
}

export default Home
