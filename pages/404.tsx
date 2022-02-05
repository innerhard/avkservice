import styled from 'styled-components'
import { LayoutPage, theme } from '../src'
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
    min-height: calc(70vh);
    bottom: 0;

    @media (min-width: ${theme.breakpoint.desktopSm}px) {
        min-height: calc(80vh);
    }
`
