import { useEffect, useState } from 'react'
import type { NextPage } from 'next'
import { DataGrid, GridColDef, GridApi, GridCellValue } from '@mui/x-data-grid'
import { LayoutPage } from '@components'
import styled from 'styled-components'
import {
    Button,
    Divider,
    FormControl,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { useCookies } from 'react-cookie'
import UpdateIcon from '@mui/icons-material/Update'
import { getAuth, getPhones, putPhones } from '../../src/api/query'
import { times } from 'lodash'

const Calls: NextPage = () => {
    const operator = 'Operator'
    const [auth, setAuth] = useState(false)
    const [data, setData] = useState<any>([])
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    const [cookies, setCookie] = useCookies(['avkcall'])

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
        getPhones().then(info => {
            setData(info?.data)
        })
    }, [])

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'lastName', headerName: 'Имя', width: 130 },
        { field: 'phoneNumber', headerName: 'Номер телефона', width: 200 },
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
                            <Button variant="contained" onClick={handleUpdateData}>
                                Обновить таблицу
                            </Button>
                            <Divider style={{ margin: '16px 0' }} />
                            <DataGrid
                                rows={data}
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
export default Calls
