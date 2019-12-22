import React from 'react'
import Antd from 'antd'
import styled from 'styled-components'

const Body = styled(Antd.Layout.Footer)`
    height: 105px;
    text-align: center;
    font-size: 12px;
    color: #999;
    padding: 24px 0;
`

const Divider = styled(Antd.Divider)`
    margin: 12px 0;
`

const Top = styled.section`
    margin-left: 24px;
    text-align: left;
    white-space: nowrap;
`

const Bottom = styled.section`
    margin-left: 12px;
    text-align: left;
    white-space: nowrap;
`

export const Footer = () => {
    return (
        <Body>
            <Top>
                解决方案&nbsp;&nbsp;&nbsp;&nbsp;客户案例&nbsp;&nbsp;&nbsp;&nbsp;新闻资讯&nbsp;&nbsp;&nbsp;&nbsp;关于我们
            </Top>
            <Divider />
            <Bottom>
                © 2019 广州智码物联科技有限公司 All Rights Reserved
                粤ICP备19054907号-1
            </Bottom>
        </Body>
    )
}
