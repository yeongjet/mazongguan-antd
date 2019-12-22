import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Antd from 'antd'
import 'antd/dist/antd.css'
import { Header } from './Header'
import { Sider } from './Sider'
import { Footer } from './Footer'

const { Layout } = Antd

const Body = styled(Antd.Layout)`
    min-height: 100%;
`

const Board = styled(Antd.Layout)`
    padding: 0 24px;
`
const Content = styled(Antd.Layout.Content)`
    background: #fff;
    padding: 24px;
    margin: 0;
`

const Breadcrumb = styled(Antd.Breadcrumb)`
    margin: 16px 0;
`

const Frame = styled(Antd.Layout)`
    height: calc(100vh - 64px);
`

const Home = () => {
    useEffect(() => {
        // document.getElementById('root').style.height = window.innerHeight + 'px'
    })
    return (
        <Body>
            <Header></Header>
            <Frame>
                <Sider></Sider>
                <Board>
                    <Breadcrumb>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <Content>Content</Content>
                </Board>
            </Frame>
            {/* <Footer></Footer> */}
        </Body>
    )
}

export default Home
