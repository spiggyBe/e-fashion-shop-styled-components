import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display: flex;
width: 100%;
justify-content: center;

@media (max-width: 960px ) {
    flex-direction: column;
    align-items: center;
}
`

const ImgContainer = styled.div`
width: 40%;
`

const Image = styled.img`
width: 100%;
`

const InfoContainer = styled.div`
height: 100%;
width: 40%;
`

const Title = styled.h1`
font-size: 24px;
font-weight: 600;
`

const Description = styled.p`
padding: 20px 0;
`

const Price = styled.h3`
margin: 20px 0 20px;

span {
    font-weight: 600;
}
`

const FilterContainer = styled.div`
display: flex;
`

const Filter = styled.div`
display: flex;
align-items: center;
`

const FilterText = styled.span`
margin: 10px 10px 10px 0;
`

const FilterColorSelect = styled.div`
display: flex;
`

const FilterSizeSelect = styled.select`
cursor: pointer;
`

const FilterColorOption = styled.option`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${({ color }) => color};
margin-right: 10px;
cursor: pointer;
`

const FilterSizeOption = styled.option`
cursor: pointer;
`


export const SingleProductPage = () => {
    return (
        <Container>
            <ImgContainer>
                <Image alt='product-photo' src='https://cdn.pixabay.com/photo/2016/08/04/15/03/australia-1569232_960_720.jpg' />
            </ImgContainer>
            <InfoContainer>
                <Title>Product name</Title>
                <Description>Lorem ipsum Fugiat duis adipisicing non est quis qui quis Lorem enim cupidatat.
                    Nulla consectetur ullamco eu ad. Ut deserunt pariatur qui ullamco veniam et ea non dolor ex est.
                    Sint voluptate eiusmod in dolor ex esse. Ad est excepteur duis nostrud anim.
                    Labore magna ullamco incididunt non laborum deserunt adipisicing in velit do laborum.
                    Minim Lorem officia amet ullamco minim. Minim ipsum quis elit qui incididunt sint reprehenderit excepteur nisi consequat est id.
                    Reprehenderit enim qui in enim. Qui officia officia non quis minim qui.
                </Description>
                <FilterContainer>
                    <Filter>
                        <FilterText>Color</FilterText>
                        <FilterColorSelect>
                            <FilterColorOption color='red' />
                            <FilterColorOption color='blue' />
                            <FilterColorOption color='green' />
                        </FilterColorSelect>
                    </Filter>
                    <Filter>
                        <FilterText>Size</FilterText>
                        <FilterSizeSelect>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                        </FilterSizeSelect>
                    </Filter>
                </FilterContainer>
                <Price>Price: <span>$ 25</span></Price>
            </InfoContainer>
        </Container>
    )
}
