import type { NextPage } from 'next'
import { Banner, CameraView, Cards, LayoutPage, Stock } from '@components'
import { theme } from '../src'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getStocks } from '../src/api/query'
import { orderBy } from 'lodash'

const Home: NextPage = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        getStocks().then(data => {
            setData(data?.data)
        })
    }, [])
    const filter = orderBy(data, 'priority')
    const cards = [
        {
            id: 1,
            title: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
            imageLink: './computer.png',
            cardColor: theme.colors.red.step0,
            columnWidthDesktop: 3,
            columnWidthTablet: 3,
            textColor: theme.colors.white.step0,
            link: `/service/1`,
            alt: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
        },
        {
            id: 2,
            title: 'РЕМОНТ ХОДОВОЙ ЧАСТИ',
            imageLink: './chassis.png',
            cardColor: theme.colors.gray.step2,
            columnWidthDesktop: 3,
            link: `/service/2`,
            alt: 'РЕМОНТ ХОДОВОЙ ЧАСТИ',
        },
        {
            id: 3,
            title: 'РЕМОНТ КПП',
            imageLink: './kpp.png',
            cardColor: theme.colors.gray.step1,
            textColor: theme.colors.white.step0,
            columnWidthDesktop: 2,
            link: `/service/3`,
            alt: 'РЕМОНТ КПП',
        },
        {
            id: 4,
            title: 'РЕМОНТ ДВС',
            imageLink: './heart.png',
            cardColor: theme.colors.gray.step2,
            columnWidthDesktop: 2,
            link: `/service/4`,
            alt: 'РЕМОНТ ДВС',
        },
        {
            id: 5,
            title: 'ЗАМЕНА ТЕХ.ЖИДКОСТЕЙ',
            imageLink: './shell-oil.png',
            cardColor: theme.colors.red.step0,
            textColor: theme.colors.white.step0,
            columnWidthDesktop: 2,
            link: `/service/5`,
            alt: 'ЗАМЕНА ТЕХ.ЖИДКОСТЕЙ',
        },
    ]

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
                    <Cards cards={cards} />
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
