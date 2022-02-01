import React, { FC, useEffect, useState } from 'react'
import { Navigation, Footer, GridLayout } from '@components'
import { Styled } from './styled'
import { theme } from '@theme'
import { getGlobalInfo } from '../../../api/query'

const items = [
    {
        id: 1,
        title: 'КОМПЬЮТЕРНАЯ ДИАГНОСТИКА',
        imageLink: './heart.png',
        cardColor: theme.colors.red.step0,
        columnWidthDesktop: 3,
        columnWidthTablet: 3,
        textColor: theme.colors.white.step0,
        link: `/service/1/`,
        alt: 'awdawdawdaw',
    },
    {
        id: 2,
        title: 'РЕМОНТ ХОДОВОЙ ЧАСТИ',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step2,
        columnWidthDesktop: 3,
        link: `/service/2/`,
        alt: 'awdawdawdaw',
    },
    {
        id: 3,
        title: 'РЕМОНТ КПП',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step1,
        textColor: theme.colors.white.step0,
        columnWidthDesktop: 2,
        link: `/service/3/`,
        alt: 'awdawdawdaw',
    },
    {
        id: 4,
        title: 'РЕМОНТ ДВС',
        imageLink: './heart.png',
        cardColor: theme.colors.gray.step2,
        columnWidthDesktop: 2,
        link: `/service/4/`,
        alt: 'awdawdawdaw',
    },
    {
        id: 5,
        title: 'ЗАМЕНА ТЕХ.ЖИДКОСТЕЙ',
        imageLink: './heart.png',
        cardColor: theme.colors.red.step0,
        textColor: theme.colors.white.step0,
        columnWidthDesktop: 2,
        link: `/service/5/`,
        alt: 'awdawdawdaw',
    },
]

interface IData {
    globalInfo: null
    id: number
    linkOtherPhoneNumber: string
    linkPhoneNumber: string
    otherPhoneNumber: string
    phoneNumber: string
    siteName: string
    updated_at: string
    workingMode: string
}

export const LayoutPage: FC = ({ children }) => {
    const [data, setData] = useState<IData | null>(null)
    const [hasError, setError] = useState<boolean>(false)

    useEffect(() => {
        getGlobalInfo()
            .then(info => {
                setData(info?.data)
            })
            .catch(err => setError(!!err))
    }, [])

    if (hasError) {
        return <div>ERROR</div>
    }

    return (
        <Styled.Container>
            {data && (
                <>
                    <Navigation
                        phoneNumber={data.phoneNumber}
                        linkPhoneNumber={data.linkPhoneNumber}
                        workingMode={data.workingMode}
                    />
                    <GridLayout>{children}</GridLayout>
                    <Footer
                        items={items}
                        phoneNumber={data.phoneNumber}
                        linkPhoneNumber={data.linkPhoneNumber}
                        otherPhoneNumber={data.otherPhoneNumber}
                        linkOtherPhoneNumber={data.linkOtherPhoneNumber}
                    />
                </>
            )}
        </Styled.Container>
    )
}
