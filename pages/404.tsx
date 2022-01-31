import styled from 'styled-components'
import { LayoutPage } from '../src'
import { NotFound } from '../src/icons/404'
import { Typography } from '@mui/material'

export default function Custom404() {
    return (
        <LayoutPage>
            <WrapperAddress>
                <Typography variant="h3" style={{ justifySelf: 'center' }}>
                    Страница не найдена!
                </Typography>
                <NotFound />
            </WrapperAddress>
        </LayoutPage>
    )
}

const WrapperAddress = styled.div`
    display: grid;
    min-height: 1024px; 
    bottom: 0;
`
