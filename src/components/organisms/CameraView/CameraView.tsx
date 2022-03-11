import React, { FC, useEffect, useState } from 'react'
import { Text } from '@components'
import { Styled } from './styled'
import { theme } from '@theme'
import _ from 'lodash'

type TCameraViewProps = {
    links?: {
        id: number
        link?: string
        boxAddress?: string
        buttonName?: string
    }[]
}

export const CameraView: FC<TCameraViewProps> = ({ links }) => {
    const [data, setData] = useState<any[] | undefined>(undefined)
    const address = links?.map(({ boxAddress }) => boxAddress)
    const uniqueBox = [...new Set(address)]
    const [addressBoxes, setSetAddressBoxes] = useState<string | undefined>(data && data[0])
    const filterLinks = links?.filter(({ boxAddress }) => boxAddress === address)
    const firstElement = filterLinks && filterLinks[0]?.id
    const [box, setBox] = useState<number | undefined>(firstElement || 4)
    const result = links?.filter(({ boxAddress }) => boxAddress === addressBoxes)
    const sortLinks = _.sortBy(result, ['id'])

    const handleBoxAddress = (address: string | undefined) => {
        setBox(firstElement)
        setSetAddressBoxes(address)
    }

    useEffect(() => {
        setData(uniqueBox)
        setSetAddressBoxes(uniqueBox[0])
    }, [links])

    useEffect(() => {
        setBox(sortLinks[0]?.id)
    }, [addressBoxes])

    return (
        <Styled.WrapperCameraView>
            <Text size={32} sizeMob={24} fontWeight={900}>
                Online-трансляция
            </Text>
            <Styled.AddressWrapper>
                {uniqueBox?.map((item, index) => (
                    <Styled.CustomButton
                        key={index}
                        bgcolor={item === addressBoxes ? theme.colors.red.step0 : '#1F1F1F'}
                        onClick={() => handleBoxAddress(item)}
                    >
                        {item}
                    </Styled.CustomButton>
                ))}
            </Styled.AddressWrapper>
            <Styled.BoxWrapper>
                {sortLinks?.map(({ id, buttonName }) => (
                    <Styled.CustomButton
                        key={id}
                        bgcolor={box === id ? theme.colors.red.step0 : '#1F1F1F'}
                        onClick={() => setBox(id)}
                    >
                        {buttonName}
                    </Styled.CustomButton>
                ))}
            </Styled.BoxWrapper>
            <Styled.WrapperLoader>
                {sortLinks
                    ?.filter(({ id, boxAddress }) => id === box && boxAddress === addressBoxes)
                    ?.map(({ link, id }) => {
                        return (
                            <iframe
                                key={id}
                                className="iv-i"
                                src={link}
                                width="100%"
                                height="252"
                                frameBorder="0"
                                style={{ borderRadius: '8px' }}
                            />
                        )
                    })}
            </Styled.WrapperLoader>
        </Styled.WrapperCameraView>
    )
}
