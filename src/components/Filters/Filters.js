import React from 'react'

import { FilterContainer, Filter, FilterText } from './FiltersStyle'

export const Filters = () => {
    return (
        <FilterContainer>
            <Filter><FilterText>Filter products:</FilterText></Filter>
            <Filter><FilterText>Sort products:</FilterText></Filter>
        </FilterContainer>
    )
}
