import styled from 'styled-components'
import { theme } from '@theme'

type TButtonProps = {
    bgcolor?: string;
}

const WrapperCameraView = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-row-gap: 24px;
  margin-bottom: 48px;

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-template-columns: 1fr 1fr;
  }

`
const AddressWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-column-end: 2 span;
    grid-template-columns: repeat(4, 1fr);
  }
`
const BoxWrapper = styled.div`
  display: grid;
  grid-column-gap: 16px;
  grid-template-columns: repeat(3, 1fr);

  @media (min-width: ${theme.breakpoint.tabletMd}px) {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 24px;
  }
`

const CustomButton = styled.button<TButtonProps>`
  box-Shadow: none;
  text-transform: none;
  color: #ffffff;
  font-size: 16px;
  padding: 6px 24px;
  border: 1px solid;
  line-height: 1.5;
  background-color: ${({ bgcolor }) => bgcolor || `#1F1F1F`};
  border-radius: 16px;
  font-family: Roboto, sans-serif;

  &:hover {
    background-color: ${theme.colors.red.step0};
    border-Color: ${theme.colors.white.step0};
    box-Shadow: none;
  }

  &:active {
    background-color: ${theme.colors.red.step0};
    border-Color: ${theme.colors.white.step0};
    box-Shadow: none;
  }

  &:focus {
    background-color: ${theme.colors.red.step0};
    border-Color: ${theme.colors.white.step0};
    box-Shadow: 0 0 0 0.2rem rgba(0, 123, 255, .5);
  }
,

`
const WrapperLoader = styled.div`
  display: grid;
  background: #000000;
  border-radius: 8px
`

export const Styled = {
    WrapperCameraView,
    CustomButton,
    AddressWrapper,
    BoxWrapper,
    WrapperLoader
}
