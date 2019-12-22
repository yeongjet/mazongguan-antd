import React from 'react'
import Antd from 'antd'
import styled from 'styled-components'

const Body = styled(Antd.Layout.Footer)`
    text-align: center;
    /* background: rgba(255, 255, 255, 0.2); */
`
export const Footer = () => {
    return (
        <Body>
            © 2019 广州智码物联科技有限公司 All Rights Reserved
            粤ICP备19054907号-1
        </Body>
    )
}
