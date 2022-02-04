import type { NextPage } from 'next'

import { LayoutPage } from '@components'
import styled from 'styled-components'
import { Arrow, theme } from '../../src'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { getStocks } from '../../src/api/query'
import { Typography } from '@mui/material'
import { orderBy } from 'lodash'

const Stock: NextPage = () => {
    const [data, setData] = useState<Array<{ title: string; description: string; expiration: string; image: any }>>([])
    useEffect(() => {
        getStocks().then(data => {
            const result = orderBy(data?.data, 'priority')
            // @ts-ignore
            setData(result)
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
                    <WrapperBlock key={title}>
                        <Typography variant="h5" gutterBottom component="div">
                            {title}
                        </Typography>
                        <div>{description}</div>
                        {image?.url && (
                            <div>
                                <CustomImage src={image?.name} alt={image?.name} />
                            </div>
                        )}
                        {expiration && <div>Окончание акции {expiration}</div>}
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
const CustomImage = styled.img`
    width: 100%;

    @media (min-width: ${theme.breakpoint.mobileMd}px) {
        width: 320px;
    }
`
const WrapperBlock = styled.div`
    display: grid;
    height: fit-content;
    grid-template-rows: min-content min-content min-content min-content;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    grid-row-gap: 16px;
    border-radius: 20px;
    padding: 24px;
    background: #eaeaea;
`
const WrapperLinkHome = styled.div`
    display: grid;
    grid-template-columns: 13px 1fr;
    grid-column-gap: 16px;
`
export default Stock
