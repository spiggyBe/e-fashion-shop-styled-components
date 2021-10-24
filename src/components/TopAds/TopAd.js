import React from 'react'

import { TopAdContainer, TopAdTitle, TopAdContent } from './TopAdStyle'

export const TopAd = () => {


    const fakeAds = {
        fakeTitle: 'Sommer Sale!!!',
        fakeContent: 'bla bla bla bla bla bla bla blabla bla bla blabla bla bla blabla bla bla bla'
    }

    return (
        <TopAdContainer>
            <TopAdTitle>{fakeAds.fakeTitle} </TopAdTitle>
            <TopAdContent>{fakeAds.fakeContent} </TopAdContent>
        </TopAdContainer>
    )
}
