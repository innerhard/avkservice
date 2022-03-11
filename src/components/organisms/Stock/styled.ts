import styled from 'styled-components'
import { theme } from '@theme'
import { Button } from '@mui/material'

interface IProps {
    $percent: boolean
}

const WrapperStock = styled.div<IProps>`
    display: grid;
    background: linear-gradient(91.66deg, #1f437a 21.87%, #cb7575 88.65%);
    border-radius: 20px;
    padding: 16px;
    margin-bottom: 16px;
  
    @media (min-width: ${theme.breakpoint.tabletMd}px) {
        grid-template-columns: ${({ $percent }) => ($percent ? '200px 1fr 1fr' : '200px 1fr')};
        grid-column-gap: 24px;
    }
`
const WrapperSpacing = styled.div`
    margin-bottom: 24px;
`
const CustomButton = styled(Button)({
    boxShadow: 'none',
    textTransform: 'none',
    color: '#ffffff',
    fontSize: 16,
    padding: '6px 24px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#1F1F1F',
    borderRadius: '16px',
    fontFamily: ['Roboto'].join(','),
    '&:hover': {
        backgroundColor: theme.colors.red.step0,
        borderColor: 'theme.colors.white.step0',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
})

export const Styled = {
    WrapperStock,
    WrapperSpacing,
    CustomButton,
}
