import React from 'react'

import { products } from '../../data'

import { Container } from './ProductsStyle'
import { ProductItem } from '../ProductItem/ProductItem'

export const Products = () => {
    return (
        <Container>
            {products.map(el => (
                <ProductItem el={el} key={el.id} />
            ))}
        </Container>
    )
}
