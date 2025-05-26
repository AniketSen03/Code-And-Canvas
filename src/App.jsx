import React from 'react'
import Header from './Components/Header'
import About from './Components/About'
import Services from './Components/Services'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import TermsConditions from './Components/TermsConditions'
import PrivacyPolicy from './Components/PrivacyPolicy'
import RefundPolicy from './Components/RefundPolicy'
import Faq from './Components/Faq'
import Reviews from './Components/Reviews'
import Achievements from './Components/Achievement'
import Web from './Components/Web'
import Design from './Components/Design'
import Video from './Components/Video'
import DataEntry from './Components/DataEntry'
import Wt from './Components/Wt'
const App = () => {
  return (
    <>
      < Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/reviews' element={<Reviews />} />
        <Route path='/privacypolicy' element={<PrivacyPolicy />} />
        <Route path='/terms&conditions' element={<TermsConditions />} />
        <Route path='/refund&replacement' element={<RefundPolicy />} />
        <Route path='/achievements' element={<Achievements />} />
        <Route path='/Web' element={<Web />} />
        <Route  path='/designs' element={<Design />}/>
        <Route  path='/video-editing' element={<Video />}/>
        <Route  path='/data-entry' element={<DataEntry />}/>
        <Route  path='/writing-translation' element={<Wt />}/>
      </Routes>
      <Footer />

    </>
  )
}

export default App