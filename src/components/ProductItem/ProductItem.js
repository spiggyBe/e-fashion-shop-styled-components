import React from 'react'
import { Container, Image, Icon, IconContainer } from './ProductItemStyle'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'



export const ProductItem = ({ el }) => {
    return (
        <Container>
            <Image src={el.img} alt='product item' />
            <IconContainer>
                <Icon>
                    <FavoriteBorderOutlinedIcon style={{ fill: '#000' }} />
                </Icon>
                <Icon>
                    <SearchOutlinedIcon style={{ fill: '#000' }} />
                </Icon>
                <Icon>
                    <ShoppingCartOutlinedIcon style={{ fill: '#000' }} />
                </Icon>
            </IconContainer>
        </Container>
    )
}
