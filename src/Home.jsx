import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Reviews from './Components/Reviews'
import Faq from './Components/Faq'


const Home = () => {
    useEffect(() => {
        document.title = "Code and Canvas";
    }, []);
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Services />
            <Contact />
            <Reviews />
            <Faq />
        </div>
    )
}

export default Home