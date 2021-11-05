import styled from 'styled-components'


export const TopAdContainer = styled.div`
width: 100%;
height: 80px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: #fff;
opacity: .5;
`

export const TopAdTitle = styled.h1`
text-transform: uppercase;
color: #3F3F3F;


animation: shake 2s linear infinite;
  transform: translate3d(0, 0, 0);

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
`

export const TopAdContent = styled.span`
color: #3F3F3F;
`