import React, { FC } from 'react'
import { Styled } from './styled'
import Link from 'next/link'
import { AvkLogo, AvkMobile, Clock, Coordinate } from '@icons'
import { Text } from '@components'

interface INavigation {
    phoneNumber: string
    linkPhoneNumber: string
    workingMode: string
}

export const Navigation: FC<INavigation> = ({ phoneNumber, linkPhoneNumber, workingMode }): JSX.Element => (
    <Styled.CustomGridLayout>
        <Styled.WrapperContainer>
            <Styled.DesktopWrapper>
                <Link href="/" passHref>
                    <a>
                        <AvkLogo />
                    </a>
                </Link>
            </Styled.DesktopWrapper>
            <Styled.MobileWrapper>
                <Link href="/" passHref>
                    <a>
                        <AvkMobile />
                    </a>
                </Link>
            </Styled.MobileWrapper>
            <Styled.MobileWrapper style={{ justifySelf: 'right', paddingTop: '6px' }}>
                <a href={linkPhoneNumber}>
                    <Text size={16} fontWeight={700}>
                        {phoneNumber}
                    </Text>
                </a>
            </Styled.MobileWrapper>
            <Styled.MobileWrapper>
                <Styled.WrapperIconBlock>
                    <Clock />
                    <Text size={16} fontWeight={700}>
                        {workingMode}
                    </Text>
                </Styled.WrapperIconBlock>
            </Styled.MobileWrapper>
            <Styled.MobileWrapper style={{ justifySelf: 'right' }}>
                <Styled.WrapperIconBlock>
                    <Coordinate />
                    <Link href="/address" passHref>
                        <Styled.CustomLink>
                            <Text size={16} fontWeight={700}>
                                Наши адреса
                            </Text>
                        </Styled.CustomLink>
                    </Link>
                </Styled.WrapperIconBlock>
            </Styled.MobileWrapper>
            <div />
            <Styled.DesktopWrapper>
                <Styled.WrapperIconBlock>
                    <Clock />
                    <Text size={16} fontWeight={700}>
                        {workingMode}
                    </Text>
                </Styled.WrapperIconBlock>
            </Styled.DesktopWrapper>
            <Styled.DesktopWrapper>
                <Styled.WrapperIconBlock>
                    <Coordinate />
                    <Link href="/address" passHref>
                        <Styled.CustomLink>
                            <Text size={16} fontWeight={700}>
                                Наши адреса
                            </Text>
                        </Styled.CustomLink>
                    </Link>
                </Styled.WrapperIconBlock>
            </Styled.DesktopWrapper>
            <Styled.DesktopWrapper>
                <a href={linkPhoneNumber}>
                    <Text size={24} fontWeight={700}>
                        {phoneNumber}
                    </Text>
                </a>
            </Styled.DesktopWrapper>
        </Styled.WrapperContainer>
    </Styled.CustomGridLayout>
)
