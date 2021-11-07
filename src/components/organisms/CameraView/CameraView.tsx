import React, { FC, useState } from 'react'
import { Styled } from './styled'


type TCameraViewProps = {
    links?:
        {
            id: number
            title?: string
            link?: string
            boxAddress?: string
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
            <Styled.AddressWrapper>
                {
                    uniqueBox?.map((items) => <Styled.CustomButton onClick={() => handleBoxAddress(items)}>
                        {items}
                    </Styled.CustomButton>)
                }

            </Styled.AddressWrapper>
            <Styled.BoxWrapper>
                {
                    links?.filter(({ boxAddress }) => boxAddress === addressBoxes).map(({ id }, index) =>
                        <Styled.CustomButton key={id}
                                             onClick={() => setBox(id)}>
                            Бокс {index + 1}
                        </Styled.CustomButton>)
                }

            </Styled.BoxWrapper>

            {links?.filter(({ id, boxAddress }) => id === box && boxAddress === addressBoxes).map(({ link, id }) => {
                return <iframe key={id} className='iv-i'
                               src={link}
                               width='100%' height='252' frameBorder='0' style={{ borderRadius: '8px' }} />
            })}
        </Styled.WrapperCameraView>
    )
}