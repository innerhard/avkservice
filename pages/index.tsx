import type { NextPage } from 'next'
import { Banner, CameraView, Cards, LayoutPage, Stock } from '@components'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getCardsBlocks, getStocks } from '../src/api/query'
import { orderBy } from 'lodash'

const Home: NextPage = () => {
    const [data, setData] = useState([])
    const [blocks, setBlocks] = useState([])
    useEffect(() => {
        getStocks().then(data => {
            setData(data?.data)
        })
        getCardsBlocks().then(data => {
            setBlocks(data?.data)
        })
    }, [])
    const filter = orderBy(data, 'priority')
    const links = [
        {
            id: 1,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=196608&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 2,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=262144&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 3,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-5RdSLExDJR0Obng0nX643C&camera=131072&width=&height=&lang=ru',
            boxAddress: 'ул.Ульяновых, 12',
        },
        {
            id: 4,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=524288&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
        {
            id: 5,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=131072&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
        {
            id: 6,
            title: 'string',
            link: 'https://open.ivideon.com/embed/v2/?server=100-ErDn2MEmnEPRnd6IJnHT2b&camera=655360&width=&height=&lang=ru',
            boxAddress: 'ул.43-й армии, 16',
        },
    ]
    return (
        <>
            <Head>
                <title>AVK service - автосервисы в Подольске</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="stylesheet" href="https://cdn.envybox.io/widget/cbk.css" />
            </Head>
            <LayoutPage>
                <div>
                    <Banner
                        title="РЕМОНТ И ОБСЛУЖИВАНИЕ"
                        description="гарантия 2 года на все услуги"
                        formTitle="ЗАПИСЬ В СЕРВИС"
                        buttonText="Отправить"
                    />
                    {filter && (
                        <Stock
                            description={filter[0]?.title?.toUpperCase()}
                            imgLink="./track.png"
                            percent={filter[0]?.procent}
                            alt="Все акции"
                        />
                    )}
                    <CameraView links={links} />
                    {blocks && <Cards cards={blocks} />}
                    <div style={{ height: '96px' }} />
                </div>
            </LayoutPage>
            <Script
                strategy="afterInteractive"
                src="https://cdn.envybox.io/widget/cbk.js?wcb_code=730acf1799c871b0c2610a6ea3716681"
                async={true}
            />
        </>
    )
}

export default Home
