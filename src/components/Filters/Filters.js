import React from 'react'

import { FilterContainer, Filter, FilterText, Select, Option } from './FiltersStyle'

export const Filters = () => {
    return (
        <FilterContainer>
            <Filter>
                <FilterText>Filter products:</FilterText>
                <Select>
                    <Option disabled selected>Color</Option>
                    <Option backgroundColor='red'>Red</Option>
                    <Option backgroundColor='blue'>Blue</Option>
                    <Option backgroundColor='green'>Green</Option>
                </Select>
                <Select>
                    <Option disabled selected>Size</Option>
                    <Option>S</Option>
                    <Option>M</Option>
                    <Option>L</Option>
                    <Option>XL</Option>
                </Select>
            </Filter>
            <Filter><FilterText>Sort products:</FilterText>
                <Select>
                    <Option disabled selected>Newest</Option>
                    <Option>Lowest price</Option>
                    <Option>Highest price</Option>
                </Select>
            </Filter>
        </FilterContainer>
    )
}
