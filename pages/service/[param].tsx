import type { GetStaticPaths, NextPage } from 'next'
import { GetStaticProps } from 'next'
import { LayoutPage, Text } from '@components'
import styled from 'styled-components'
import { Arrow } from '../../src'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import { getCategories } from '../../src/api/query'
import { Skeleton } from '@mui/material'

type TPageData = {
    meta: {
        url: string
        title: string
        pageName: string
        description?: { title?: string; linkImg?: string; text?: string }[]
    }
    seoText?: string
}

type TParams = {
    [key: string]: string
}

type TProps = {
    page: TPageData
}
type TPages = {
    [key: string]: TPageData
}
const one: TPageData = {
    seoText: 'Компьютерная диагностика',
    meta: {
        url: '1',
        title: 'Компьютерная диагностика',
        description: [],
        pageName: '1',
    },
}
const two: TPageData = {
    seoText: '2',
    meta: {
        url: '2',
        title: 'Ремонт ходовой части',
        description: [],
        pageName: '2',
    },
}
const three: TPageData = {
    seoText: '3',
    meta: {
        url: '3',
        title: 'Ремонт КПП',
        description: [],
        pageName: '3',
    },
}
const four: TPageData = {
    seoText: '4',
    meta: {
        url: '4',
        title: 'Ремонт ДВС',
        description: [],
        pageName: '4',
    },
}
const five: TPageData = {
    seoText: '5',
    meta: {
        url: '5',
        title: 'Замена Тех.жидкостей',
        description: [],
        pageName: '5',
    },
}

const pages: TPages = {
    1: one,
    2: two,
    3: three,
    4: four,
    5: five,
}
export const getStaticPaths: GetStaticPaths<TParams> = async () => {
    const paths = Object.keys(pages).map(page => ({
        params: {
            param: page /* pages keys */,
        },
    }))

    return { paths, fallback: false }
}

export const getStaticProps: GetStaticProps<TProps, TParams> = async ctx => {
    const { params } = ctx

    return {
        props: {
            page: pages[params ? params.param : '1'] /* выбранное по ключу значение */,
            gtmConfig: '',
        },
    }
}

const Service: NextPage<TProps> = ({ page }) => {
    const [data, setData] = useState<any>([])
    useEffect(() => {
        getCategories().then(info => {
            const res: [any] = info?.data
            setData(res?.find(item => item?.id === Number(page.meta.pageName)))
        })
    }, [page.meta.pageName])

    const content = data?.services?.map((item: any) => {
        return (
            <>
                {item?.title && (
                    <Text
                        size={24}
                        sizeMob={22}
                        fontWeight={700}
                        style={{ whiteSpace: 'pre-line', paddingBottom: '16px' }}
                    >
                        {item?.title}
                    </Text>
                )}
                {item?.text && (
                    <Text
                        size={18}
                        sizeMob={18}
                        fontWeight={700}
                        style={{ whiteSpace: 'pre-line', paddingBottom: '16px' }}
                    >
                        {item?.text}
                    </Text>
                )}

                <ReactMarkdown children={item?.content || 'No content available'} />
                <div>
                    {item?.linkImg && (
                        <img
                            src={item?.linkImg}
                            style={{
                                paddingBottom: '16px',
                                height: 'auto',
                                width: '100%',
                                maxWidth: '700px',
                            }}
                            alt={item?.linkImg}
                        />
                    )}
                </div>
            </>
        )
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
                    {page.meta.title}
                </Text>

                {content ? (
                    <Text size={18} sizeMob={18} fontWeight={700} style={{ whiteSpace: 'pre-line' }}>
                        {content}
                    </Text>
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
