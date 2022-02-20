// @ts-nocheck
import type { GetStaticPaths, NextPage } from 'next'
import { GetStaticProps } from 'next'
import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import { Arrow } from '../../src'
import Link from 'next/link'
import React from 'react'
import ReactMarkdown from 'react-markdown'
import { getCategories } from '../../src/api/query'
import { Skeleton } from '@mui/material'
import { AxiosResponse } from 'axios'

export const getStaticPaths: GetStaticPaths = async () => {
    const { data }: AxiosResponse[] = await getCategories()
    const paths = data?.map(({ url }) => ({
        params: {
            param: url.toString(),
        },
    }))

    return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { data, status } = await getCategories()

    if (status === 200) {
        return {
            props: {
                data: data.find(({ url }) => url === params.param),
            },
            revalidate: 10,
        }
    }
    throw new Error('Техническая ошибка')
}

const Service: NextPage = ({ data }) => {
    console.log({ data })
    const content = data?.services?.map((item: any) => {
        return <ReactMarkdown key={item?.id} children={item?.content || 'Статья находится в разработке!'} />
    })

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
                <Text size={32} sizeMob={24} fontWeight={700} style={{ whiteSpace: 'pre-line' }}>
                    {data?.title}
                </Text>

                {content ? (
                    <div>{content}</div>
                ) : (
                    <div>
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                        <Skeleton />
                    </div>
                )}
                <div style={{ height: '96px' }} />
            </WrapperAddress>
        </LayoutPage>
    )
}

const WrapperAddress = styled.div`
    display: grid;
    grid-row-gap: 16px;

    img {
        padding-bottom: 16px;
        height: auto;
        width: 100%;
        max-width: 700px;
    }
`
const WrapperLinkHome = styled.div`
    display: grid;
    grid-template-columns: 13px 1fr;
    grid-column-gap: 16px;
`
export default Service
