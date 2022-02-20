import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import { LayoutPage } from '@components'
import { pulse } from 'react-animations'
import useSound from 'use-sound'
import styled, { keyframes } from 'styled-components'
import {
    Button,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useCookies } from 'react-cookie'
import { getAuth, getPhones, putPhones } from '../../src/api/query'

const Calls: NextPage = () => {
    const [play] = useSound('./1.mp3')
    const operator = 'Operator'
    const [auth, setAuth] = useState(false)
    const [data, setData] = useState<any>([])
    const [isDialog, setDialog] = useState(true)
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [cookies, setCookie] = useCookies(['avkcall'])
    const [isNew, setNew] = useState(true)

    const handleAuth = () =>
        getAuth(login, password)
            .then(data => {
                setAuth(!!data)
                setCookie('avkcall', 'true', { maxAge: 3600 })
            })
            .catch(data => alert('Неверный логин или пароль'))

    const handleUpdateData = () => {
        getPhones().then(info => {
            setData(info?.data)
        })
    }

    useEffect(() => {
        const interval = setInterval(() => {
            getPhones().then(info => {
                setData(info?.data)
            })
        }, 15000)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        getPhones().then(info => {
            setData(info?.data)
        })
    }, [])
    const filterData = data?.filter((item: { call: boolean }) => item?.call === false) || []
    useEffect(() => {
        filterData?.length > 0 && setDialog(true)
        filterData?.length > 0 && (auth || cookies.avkcall) && setTimeout(() => play(), 500)
        filterData?.length === 0 && setDialog(false)
    }, [filterData])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Имя', width: 130 },
        {
            field: 'phoneNumber',
            headerName: 'Номер телефона',
            width: 200,
            renderCell: params => {
                return <a href={`tel: ${params?.value?.replace(/\s/g, '')}`}>{params?.value}</a>
            },
        },
        { field: 'call', headerName: 'Статус', width: 130 },
        { field: 'street', headerName: 'Запись', width: 130 },
        {
            field: 'action',
            headerName: 'Перезвонили',
            sortable: false,
            width: 150,
            renderCell: params => {
                const onClick = (e: { stopPropagation: () => void }) => {
                    e?.stopPropagation()
                    const api: GridApi = params.api
                    const thisRow: Record<string, GridCellValue> = {}

                    api.getAllColumns()
                        .filter(c => c.field !== '__check__' && !!c)
                        .forEach(c => (thisRow[c.field] = params.getValue(params.id, c.field)))

                    data?.forEach(async (item: { id: string | number; call: boolean }) => {
                        item?.id &&
                            !item?.call &&
                            item?.id === thisRow?.id &&
                            (await putPhones(item?.id, {
                                ...item,
                                call: true,
                                dateCall: new Date().toLocaleString(),
                                operator,
                            }))
                        !item?.call &&
                            item?.id &&
                            item?.id === thisRow?.id &&
                            getPhones().then(info => {
                                setData(info?.data)
                            })
                    })
                }

                return (
                    <Button variant="contained" onClick={onClick}>
                        Перезвонили
                    </Button>
                )
            },
        },
        { field: 'date', headerName: 'Дата поступления заявки', width: 200 },
        { field: 'dateCall', headerName: 'Дата ответа на заявку', width: 200 },
        { field: 'operator', headerName: 'Кто перезвонил', width: 200 },
    ]

    return (
        <LayoutPage>
            <WrapperAddress>
                <div>
                    {auth || cookies.avkcall ? (
                        <>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gridColumnGap: '8px' }}>
                                <Button variant="contained" onClick={handleUpdateData}>
                                    Обновить таблицу
                                </Button>
                                <Button variant={isNew ? 'outlined' : 'text'} onClick={() => setNew(true)}>
                                    Новые клиенты
                                </Button>
                                <Button variant={isNew ? 'text' : 'outlined'} onClick={() => setNew(false)}>
                                    Общая база
                                </Button>
                            </div>
                            <Divider style={{ margin: '16px 0' }} />
                            {isDialog && data && (
                                <div
                                    style={{
                                        position: 'fixed',
                                        zIndex: 2,
                                        bottom: 20,
                                        right: 20,
                                        background: '#FFFFFF',
                                        border: '2px solid #000000',
                                    }}
                                >
                                    <BouncyDiv style={{ overflow: 'overlay', height: '200px', padding: '8px' }}>
                                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                            {filterData?.length} новый(ых) клент(а)
                                        </Typography>
                                        {filterData?.map((item: { phoneNumber: any; lastName: any }) => {
                                            return (
                                                <>
                                                    {/*{filterData?.length && play()}*/}
                                                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                                        {item?.lastName}
                                                    </Typography>
                                                    <Typography variant="h5" component="div">
                                                        {item?.phoneNumber}
                                                    </Typography>
                                                    <br />
                                                </>
                                            )
                                        })}
                                    </BouncyDiv>
                                </div>
                            )}
                            <DataGrid
                                rows={isNew ? filterData : data}
                                columns={columns}
                                pageSize={15}
                                rowsPerPageOptions={[1]}
                                logLevel="error"
                            />
                        </>
                    ) : (
                        <WrapperLogin>
                            <TextField value={login} onChange={e => setLogin(e.target.value)} id="Name" label="Name" />
                            <FormControl variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={() => setShowPassword(!showPassword)}
                                                edge="end"
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                />
                            </FormControl>
                            <Button variant="contained" onClick={handleAuth}>
                                Отправить
                            </Button>
                        </WrapperLogin>
                    )}
                </div>
            </WrapperAddress>
        </LayoutPage>
    )
}

const WrapperAddress = styled.div`
    display: grid;
    height: 960px;
    margin-bottom: 96px;
`
const WrapperLogin = styled.div`
    margin: 24px;
    display: grid;
    grid-row-gap: 24px;
    height: 150px;
`
const bounceAnimation = keyframes`${pulse}`

const BouncyDiv = styled.div`
  animation: 3s infinite ${bounceAnimation};
`
export default Calls
