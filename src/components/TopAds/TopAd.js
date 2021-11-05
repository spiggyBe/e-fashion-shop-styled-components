import React from 'react'

import { TopAdContainer, TopAdTitle, TopAdContent } from './TopAdStyle'

export const TopAd = () => {


    const fakeAds = {
        fakeTitle: 'Summer Sale!!!',
        fakeContent: 'Take me where the summer never ends.'
    }

    return (
        <TopAdContainer>
            <TopAdTitle>{fakeAds.fakeTitle} </TopAdTitle>
            <TopAdContent>{fakeAds.fakeContent} </TopAdContent>
        </TopAdContainer>
    )
}
