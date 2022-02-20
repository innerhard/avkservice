import React, { FC, useState } from 'react'
import { Text } from '@components'
import { Styled } from './styled'
import { theme } from '@theme'

type TCameraViewProps = {
    links?: {
        id: number
        title?: string
        link?: string
        boxAddress?: string
        buttonName?: string
    }[]
}

export const CameraView: FC<TCameraViewProps> = ({ links }) => {
    const [box, setBox] = useState<number>(1)
    const address = links?.map(({ boxAddress }) => boxAddress)
    const uniqueBox = [...new Set(address)]
    const [addressBoxes, setSetAddressBoxes] = useState<string | undefined>(uniqueBox && uniqueBox[0])

    const handleBoxAddress = (address: string | undefined) => {
        const filterLinks = links?.filter(({ boxAddress }) => boxAddress === address)
        const firstElement = filterLinks && filterLinks[0].id
        setBox(firstElement || 1)
        setSetAddressBoxes(address)
    }

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
                {links
                    ?.filter(({ boxAddress }) => boxAddress === addressBoxes)
                    .map(({ id, buttonName }, index) => (
                        <Styled.CustomButton
                            key={id}
                            bgcolor={box === id ? theme.colors.red.step0 : '#1F1F1F'}
                            onClick={() => setBox(id)}
                        >
                            {buttonName ?? `Бокс ${index + 1}`}
                        </Styled.CustomButton>
                    ))}
            </Styled.BoxWrapper>
            <Styled.WrapperLoader>
                {links
                    ?.filter(({ id, boxAddress }) => id === box && boxAddress === addressBoxes)
                    .map(({ link, id }) => {
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
