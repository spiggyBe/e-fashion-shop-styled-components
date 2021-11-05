import React from 'react'
import { Container, Title, Text, InputContainer, Input, IconSend } from './NewsletterStyle.js'
import SendOutlinedIcon from '@mui/icons-material/SendOutlined'

export const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Text>Join us and never forget!</Text>
            <InputContainer>
                <Input placeholder='your e-mail' />
                <IconSend>
                    <SendOutlinedIcon style={{ fill: '#fff' }} />
                </IconSend>
            </InputContainer>
        </Container>
    )
}
