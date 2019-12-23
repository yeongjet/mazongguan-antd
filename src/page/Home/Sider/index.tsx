import React, { useState } from 'react'
import Antd from 'antd'
import styled from 'styled-components'

const Icon = Antd.Icon
const { SubMenu, Item } = Antd.Menu

const Body = styled(Antd.Layout.Sider).attrs({
    theme: 'light',
    collapsible: true
})`
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
    height: 100%;
    background: #ffffff;
`

const Menu = styled(Antd.Menu).attrs({
    mode: 'inline',
    defaultOpenKeys: ['sub-menu-1'],
    defaultSelectedKeys: ['menu-item-1']
})`
    height: '100%';
    border-right: 0;
`

const Frame = styled.section`
    height: 100%;
    /* min-width: 200px; */
    overflow-y: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        display: none;
    }
`
// 需要占最后一个菜单项，否则当菜单在滚动状态时，最后的菜单项会被箭头遮挡，导致无法点击
const PlaceHolder = styled(Item)`
    cursor: auto;
`

export const Sider = () => {
    const [collapsed, setCollapsed] = useState(false)
    const toggleCollapsed = () => {
        setCollapsed(!collapsed)
    }
    return (
        <Body onCollapse={toggleCollapsed}>
            <Menu>
                <SubMenu
                    key="sub-menu-1"
                    title={
                        <span>
                            <Icon type="area-chart" />
                            <span>数据魔盒</span>
                        </span>
                    }
                >
                    <Menu.Item key="menu-item-1">数据概览</Menu.Item>
                    <Menu.Item key="menu-item-2">活动数据</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub-menu-2"
                    title={
                        <span>
                            <Icon type="barcode" />
                            <span>一物一码</span>
                        </span>
                    }
                >
                    <Menu.Item key="menu-item-3">商品管理</Menu.Item>
                    <Menu.Item key="menu-item-4">赋码管理</Menu.Item>
                </SubMenu>
                <Item key="menu-item-5">
                    <span>
                        <Icon type="profile" />
                        <span>订单管理</span>
                    </span>
                </Item>
                <SubMenu
                    key="sub-menu-4"
                    title={
                        <span>
                            <Icon type="project" />
                            <span>活动管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="menu-item-6">活动总览</Menu.Item>
                    <Menu.Item key="menu-item-7">扫码领红包</Menu.Item>
                    <Menu.Item key="menu-item-8">幸运大转盘</Menu.Item>
                    <Menu.Item key="menu-item-9">扫码排行榜</Menu.Item>
                    <Menu.Item key="menu-item-10">门店销售</Menu.Item>
                </SubMenu>
                <Item key="menu-item-11">
                    <span>
                        <Icon type="solution" />
                        <span>渠道管理</span>
                    </span>
                </Item>
                <SubMenu
                    key="sub-menu-5"
                    title={
                        <span>
                            <Icon type="layout" />
                            <span>页面管理</span>
                        </span>
                    }
                >
                    <Menu.Item key="menu-item-12">图文页面</Menu.Item>
                    <Menu.Item key="menu-item-13">小程序首页</Menu.Item>
                </SubMenu>
                <PlaceHolder></PlaceHolder>
            </Menu>
        </Body>
    )
}
