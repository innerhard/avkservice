import type { NextPage } from 'next'
import { Banner, CameraView, Cards, LayoutPage, Stock } from '@components'
import Head from 'next/head'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import { getCameraBlocks, getCardsBlocks, getStocks, getWidgetServices } from '../src/api/query'
import { orderBy } from 'lodash'

const Home: NextPage = () => {
    const [data, setData] = useState<any[]>([])
    const [blocks, setBlocks] = useState([])
    const [cameraData, setCameraData] = useState([])
    const [widgets, setWidgets] = useState([])
    useEffect(() => {
        getStocks().then(data => {
            setData(data?.data)
        })
        getCardsBlocks().then(data => {
            setBlocks(data?.data)
        })
        getCameraBlocks().then(data => {
            setCameraData(data?.data)
        })
        getWidgetServices().then(data => {
            setWidgets(data?.data)
        })
    }, [])
    const filter = orderBy(data, 'priority')

    const widgetsScript = widgets?.map(({ link }) => <Script strategy="afterInteractive" src={link} async={true} />)
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
                            imgLink={filter[0]?.image?.url}
                            percent={filter[0]?.procent}
                            alt="Все акции"
                        />
                    )}
                    <CameraView links={cameraData} />
                    {blocks && <Cards cards={blocks} />}
                    <div style={{ height: '96px' }} />
                </div>
            </LayoutPage>
            {widgetsScript}
        </>
    )
}

export default Home
