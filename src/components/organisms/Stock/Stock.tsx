import React, { FC } from 'react'
import { Styled } from './styled'
import { Text, DesktopWrapper } from '@components'
import Link from 'next/link'
import { theme } from '@theme'

type TStockProps = {
    imgLink: string
    description: string
    percent: string
    alt: string
}

export const Stock: FC<TStockProps> = ({ imgLink, description, percent, alt }) => {
    return (
        <>
            <Styled.WrapperStock $percent={!!percent}>
                <DesktopWrapper>
                    <img src={'https://dev.avksrv.ru' + imgLink} width={200} height={105} alt={alt} />
                </DesktopWrapper>
                <Text
                    color={theme.colors.white.step0}
                    style={{
                        alignSelf: 'center',
                    }}
                    size={28}
                    sizeMob={24}
                    fontWeight={700}
                >
                    {description}
                </Text>
                {percent && (
                    <Text
                        color={theme.colors.red.step0}
                        size={92}
                        sizeMob={92}
                        fontWeight={900}
                        style={{
                            textShadow:
                                '2px 0 0 #fff, -2px 0 0 #fff, 0 2px 0 #fff, 0 -2px 0 #fff, 1px 1px #fff, -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff',
                            letterSpacing: '-5px',
                            justifySelf: 'center',
                        }}
                    >
                        {percent && percent + '%'}
                    </Text>
                )}
            </Styled.WrapperStock>
            <Styled.WrapperSpacing>
                <Link href="/stock" passHref>
                    <Styled.CustomButton as="a">Все акции</Styled.CustomButton>
                </Link>
            </Styled.WrapperSpacing>
        </>
    )
}
