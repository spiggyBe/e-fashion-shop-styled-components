import React from 'react'
import { TitlePage } from '../components/TitlePage/TitlePage'
import { Filters } from '../components/Filters/Filters'
import { Products } from '../components/Products/Products'

export const ProductsPage = () => {
    return (
        <>
            <TitlePage />
            <Filters />
            <Products />
        </>
    )
}


