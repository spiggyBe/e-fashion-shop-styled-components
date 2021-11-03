import React from 'react'

import { categoriesData } from '../../data'

import { Container } from './CategoriesStyle'
import { CategoryItem } from '../CategoryItem/CategoryItem'

export const Categories = () => {
    return (
        <Container>
            {categoriesData.map(el => (
                <CategoryItem el={el} key={el.id} />
            ))}
        </Container>
    )
}
