import styled from 'styled-components'


export const FilterContainer = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`

export const Filter = styled.div`
display: flex;
margin: 20px 0;
padding: 0 50px;
`

export const FilterText = styled.div`
font-weight: 600;
margin-right: 20px;
`

export const Select = styled.select`
margin-right: 10px;
`

/* const setBackgroundColor = backgroundColor => {
    switch (backgroundColor) {
        case "red":
            return "red"
        case "green":
            return "#0eff00"
        case "blue":
            return "blue"
        default:
            return "white"
    }
} */

export const Option = styled.option`
background-color: ${({ backgroundColor }) => backgroundColor/* setBackgroundColor(backgroundColor) */};
cursor: pointer;
`