import React, { useEffect } from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Reviews from './Components/Reviews'
import Faq from './Components/Faq'

const Home = () => {
    useEffect(() => {
        document.title = "Code and Canvas"; // Set title when component loads
    }, []);
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Contact />
            <Reviews />
            <Faq />
        </>
    )
}

export default Home