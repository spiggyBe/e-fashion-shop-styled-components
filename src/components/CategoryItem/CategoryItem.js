import React from 'react'
import { Container, Image, Info, Title, Button } from './CategoryItemStyle'

export const CategoryItem = ({ el }) => {
    return (
        <Container>
            <Image src={el.img} />
            <Info>
                <Title>{el.title}</Title>
                <Button>CHECK NOW</Button>
            </Info>
        </Container>
    )
}
