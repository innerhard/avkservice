import type { NextPage } from 'next'

import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import { Arrow } from '../../src'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getStocks } from '../../src/api/query'
import { Typography } from '@mui/material'

const Stock: NextPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getStocks().then(data => {
            setData(data?.data)
        })
    }, [])
    return (
        <LayoutPage>
            <WrapperAddress>
                <Link href={`/`} passHref>
                    <a>
                        <WrapperLinkHome>
                            <Arrow />
                            Назад
                        </WrapperLinkHome>
                    </a>
                </Link>
                {data?.map(({ title, description, expiration, image }) => (
                    <WrapperBlock>
                        <Typography variant="h5" gutterBottom component="div">
                            {title}
                        </Typography>
                        <div>{description}</div>
                        {image?.url && (
                            <div>
                                <img src={image?.url} alt={image?.name} />
                            </div>
                        )}
                        <div>Окончание акции {expiration}</div>
                    </WrapperBlock>
                ))}
                <div style={{ height: '480px' }} />
            </WrapperAddress>
        </LayoutPage>
    )
}

const WrapperAddress = styled.div`
    display: grid;
    grid-row-gap: 16px;
    grid-template-rows: min-content;
`
const WrapperBlock = styled.div`
    display: grid;
    height: fit-content;
    grid-template-rows: min-content min-content min-content min-content;
    box-shadow: rgba(255, 255, 255, 0.1) 0px 1px 1px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
        rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    grid-row-gap: 16px;
    border-radius: 20px;
    padding: 16px;
`
const WrapperLinkHome = styled.div`
    display: grid;
    grid-template-columns: 13px 1fr;
    grid-column-gap: 16px;
`
export default Stock
