import React from 'react'
import Antd from 'antd'
import styled from 'styled-components'
import {
    headerLogoIcon,
    headerLogoText
} from '../../../asset/image/header-logo'

const Logo = styled.section`
    display: flex;
    align-items: center;
    width: 100px;
    height: 32px;
    /* background: rgba(255, 255, 255, 0.2); */
`
const LogoIcon = styled.img.attrs({
    src: headerLogoIcon
})`
    width: auto;
    height: 32px;
`

const LogoText = styled.img.attrs({
    src: headerLogoText
})`
    margin-left: 10px;
    width: 55px;
    height: auto;
`
const Body = styled(Antd.Layout.Header)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`
const Avatar = styled(Antd.Avatar).attrs({
    size: 32,
    alt: '用户名'
})`
    background-color: #357eff;
`

export const Header = () => {
    return (
        <Body>
            <Logo>
                <LogoIcon></LogoIcon>
                <LogoText></LogoText>
            </Logo>
            <Avatar>Denny</Avatar>
        </Body>
    )
}
