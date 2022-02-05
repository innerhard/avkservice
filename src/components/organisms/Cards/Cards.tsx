import React, { FC } from 'react'
import { orderBy } from 'lodash'
import { Text } from '@components'
import { Styled } from './styled'

type TStockProps = {
    cards?: {
        id: number
        title?: string
        imageLink?: string
        cardColor?: string
        textColor?: string
        columnWidthDesktop?: number
        columnWidthTablet?: number
        link?: string
        alt?: string
        position: number
    }[]
}

export const Cards: FC<TStockProps> = ({ cards }) => {
    const filterCards = orderBy(cards, 'position')
    return (
        <Styled.WrapperCards>
            {filterCards?.map(
                ({ id, title, imageLink, cardColor, columnWidthDesktop, columnWidthTablet, textColor, link, alt }) => (
                    <Styled.WrapperCard
                        href={link}
                        key={id}
                        cardColor={cardColor}
                        columnWidthDesktop={columnWidthDesktop}
                        columnWidthTablet={columnWidthTablet}
                    >
                        <Text color={textColor} size={24} fontWeight={700}>
                            {title}
                        </Text>
                        <img src={imageLink} width={300} alt={alt} style={{ marginBottom: '-54px' }} />
                    </Styled.WrapperCard>
                ),
            )}
        </Styled.WrapperCards>
    )
}
