import styled from 'styled-components'
import { LayoutPage } from '../src'
import { NotFound } from '../src/icons/404'

export default function Custom404() {
    return (
        <LayoutPage>
            <WrapperAddress>
                <NotFound />
            </WrapperAddress>
        </LayoutPage>
    )
}

const WrapperAddress = styled.div`
    display: grid;
    min-height: calc(100vh - 200px); 
    bottom: 0;
`
