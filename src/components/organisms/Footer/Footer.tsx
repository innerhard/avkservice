import React, { FC } from 'react'
import { Styled } from './styled'
import { Text, GridLayout } from '@components'
import { AvkLogoWhite } from '@icons'
import Link from 'next/link'

type TFooterProps = {
    items?: {
        id: number
        title?: string
        imageLink?: string
        cardColor?: string
        textColor?: string
        columnWidthDesktop?: number
        columnWidthTablet?: number
        link?: string
        alt?: string
    }[]
    phoneNumber: string
    linkPhoneNumber: string
    otherPhoneNumber: string
    linkOtherPhoneNumber: string
}
export const Footer: FC<TFooterProps> = ({
    items,
    phoneNumber,
    linkPhoneNumber,
    otherPhoneNumber,
    linkOtherPhoneNumber,
}): JSX.Element => {
    const blocks = items?.map(({ link, title, id }) => {
        return (
            link &&
            title && (
                <Link key={id} href={link} passHref prefetch={false}>
                    <a>{title[0].toUpperCase() + title.toLowerCase().slice(1)}</a>
                </Link>
            )
        )
    })

    return (
        <Styled.Container>
            <GridLayout>
                <Styled.Wrapper>
                    <Styled.WrapperLink>{blocks}</Styled.WrapperLink>
                    <div>
                        <a href={linkPhoneNumber}>
                            <Text size={24}>{phoneNumber}</Text>
                        </a>
                        <br />
                        <a href={linkOtherPhoneNumber}>
                            <Text size={24}>{otherPhoneNumber}</Text>
                        </a>
                    </div>
                    <Link href="/" passHref prefetch={false}>
                        <a>
                            <AvkLogoWhite />
                        </a>
                    </Link>
                </Styled.Wrapper>
            </GridLayout>
        </Styled.Container>
    )
}
