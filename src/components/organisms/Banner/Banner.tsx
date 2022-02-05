import React, { FC, useState } from 'react'
import { Button, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import { Text } from '@components'
import { Styled } from './styled'
import { Stars } from '@icons'
import { useFormik } from 'formik'
import InputMask from 'react-input-mask'
import * as Yup from 'yup'
import { theme } from '@theme'
import axios from 'axios'

const SignupSchema = Yup.object().shape({
    phoneNumber: Yup.string()
        .transform(value => value.replace(/[^\d]/g, ''))
        .min(11, 'Введите корректный номер')
        .required('Введите корректный номер'),
    lastName: Yup.string().trim().required('Введите корректное имя'),
})

type TBannerProps = {
    title: string
    description: string
    formTitle: string
    buttonText: string
}
const date = new Date().toLocaleString()

export const Banner: FC<TBannerProps> = ({ title, description, formTitle, buttonText }) => {
    const [send, setSend] = useState(false)
    const [street, setStreet] = useState('ульяновых')
    const formik = useFormik({
        initialValues: {
            phoneNumber: '',
            lastName: '',
            street: 'ульяновых',
        },
        validationSchema: SignupSchema,
        validateOnBlur: true,
        validateOnChange: false,
        onSubmit: values => {
            setSend(true)
            axios.post('http://dev.avksrv.ru/callphones', { ...values, street: street, call: false, date: date })
            setTimeout(() => {
                setSend(false)
            }, 20000)
        },
    })

    return (
        <>
            <Styled.FormContainer>
                <Styled.CustomImage src="./mersedes.png" alt="logo" />
                <Styled.WrapperTextBlock>
                    <Styled.CustomHeading size={30} sizeMob={24} style={{ zIndex: 1 }} fontWeight={700}>
                        {title}
                    </Styled.CustomHeading>
                    <Text size={14} style={{ zIndex: 1 }} fontWeight={700}>
                        {description}
                    </Text>
                </Styled.WrapperTextBlock>
                <Styled.WrapperForm onSubmit={formik.handleSubmit} style={{ zIndex: 1 }}>
                    {!send && (
                        <>
                            <Text size={24} sizeMob={24} fontWeight={700} color="white">
                                {formTitle}
                            </Text>
                            <ToggleButtonGroup
                                value={street}
                                style={{ width: '100%', background: '#ffffff' }}
                                exclusive
                            >
                                <ToggleButton
                                    value="ульяновых"
                                    style={{ width: '50%', padding: '16px 8px' }}
                                    onClick={() => {
                                        setStreet('ульяновых')
                                    }}
                                >
                                    ул.Ульяновых, 12
                                </ToggleButton>
                                <ToggleButton
                                    value="43армии"
                                    style={{ width: '50%', padding: '16px 8px' }}
                                    onClick={() => {
                                        setStreet('43армии')
                                    }}
                                >
                                    ул.43-й армии, 16
                                </ToggleButton>
                            </ToggleButtonGroup>
                            <InputMask
                                mask="+7 999 999 99 99"
                                id="phoneNumber"
                                name="phoneNumber"
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                type="phone"
                            >
                                {() => (
                                    <TextField
                                        id="phoneNumber"
                                        placeholder="Ваш номер"
                                        error={!!formik?.errors?.phoneNumber}
                                        style={{ backgroundColor: 'white', borderRadius: '8px' }}
                                    />
                                )}
                            </InputMask>

                            {formik.errors.phoneNumber && (
                                <Text size={12} color={theme.colors.white.step0}>
                                    {formik.errors.phoneNumber}
                                </Text>
                            )}
                            <TextField
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Ваше имя"
                                onChange={formik.handleChange}
                                value={formik.values.lastName}
                                style={{ backgroundColor: 'white', borderRadius: '8px' }}
                            />
                            {formik.errors.lastName && (
                                <Text size={12} color={theme.colors.white.step0}>
                                    {formik.errors.lastName}
                                </Text>
                            )}
                            <Button
                                variant="contained"
                                type="submit"
                                style={{ backgroundColor: 'red', padding: '16px' }}
                            >
                                {buttonText}
                            </Button>
                        </>
                    )}
                    {send && (
                        <>
                            <Text size={24} sizeMob={24} fontWeight={700} color="white">
                                {formik.values.lastName}
                            </Text>
                            <Text size={18} sizeMob={18} fontWeight={400} color="white">
                                Ожидайте звонка оператора чтобы подтвердить запись!
                            </Text>
                            <Text size={18} sizeMob={18} fontWeight={400} color="white">
                                на номер {formik.values.phoneNumber}
                            </Text>
                        </>
                    )}
                </Styled.WrapperForm>
                <Styled.RatingWrapper>
                    <img src="./yandex-logo.png" width={76} height={22} alt="logo" />
                    <Stars />
                    <Styled.ReviewsWrapper>
                        <Styled.CustomLink href="https://yandex.ru/maps/org/avtoservis_avkautoservice/100427277081/?ll=37.490570%2C55.421889&mode=search&sctx=ZAAAAAgBEAAaKAoSCXZQiesYxUJAERVHs%2BwosktAEhIJyO4BAOAt7z8RqpWIPr%2Fi0z8iBQABAgQFKAowADimiK%2BT%2FuuOg%2BABQPtTSAFVzczMPlgAYiJleHBfaWQ9Y29udHJvbF93b3JzZV9tZXRyaWNfMV9tYXBzagJydXAAnQHNzEw9oAEAqAEA&sll=37.490570%2C55.421889&sspn=0.130485%2C0.058824&text=%D0%9F%D0%BE%D0%B4%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%2C%20%D0%B0%D0%B2%D1%82%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D0%B8%D1%81&z=13">
                            <Text size={16} fontWeight={700} style={{ justifyItems: 'center' }}>
                                Отзывы
                            </Text>
                        </Styled.CustomLink>
                    </Styled.ReviewsWrapper>
                </Styled.RatingWrapper>
                <Styled.DesktopWrapper>
                    <Styled.PartnerWrapper>
                        <img src="./shell.png" width={92} height={24} alt="logo" />
                        <Text size={16} fontWeight={700}>
                            официальный партнер
                        </Text>
                    </Styled.PartnerWrapper>
                </Styled.DesktopWrapper>
            </Styled.FormContainer>
            <Styled.MobileWrapper style={{ marginBottom: '24px' }}>
                <Styled.PartnerWrapper>
                    <img src="./shell.png" width={92} height={24} alt="logo" />
                    <Text size={16} fontWeight={700} style={{ justifySelf: 'end' }}>
                        официальный партнер
                    </Text>
                </Styled.PartnerWrapper>
            </Styled.MobileWrapper>
        </>
    )
}
