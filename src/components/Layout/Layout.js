import React from 'react'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'

import { GlobalStyle } from '../../globalStyle/globalStyle'

export const Layout = ({ children }) => {
    return (
        <>
            <GlobalStyle />
            <Navbar />
            <Footer />
        </>
    )
}
