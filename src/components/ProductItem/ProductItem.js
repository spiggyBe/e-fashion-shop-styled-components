import React from 'react'
import { Container, Image } from './ProductItemStyle'

export const ProductItem = ({ el }) => {
    return (
        <Container>
            <Image src={el.img} />
        </Container>
    )
}
