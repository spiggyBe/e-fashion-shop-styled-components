import React from 'react'
import { TopAd } from '../TopAds/TopAd'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

import { GlobalStyle } from '../../globalStyle/globalStyle'

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <TopAd />
            <Navbar />
            <Footer />
        </>
    )
}
