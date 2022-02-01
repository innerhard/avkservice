import axios from 'axios'

export const getAPI = axios.post('https://dev.avksrv.ru/admin/login', {
    'email': 'innerhard@gmail.com',
    'password': 'WhoFuckMe!100505',
})

export const getAuth = (login: string, password: string) => axios.post('https://dev.avksrv.ru/admin/login', {
    'email': login,
    'password': password,
})

export const getCategories = () => axios.get('https://dev.avksrv.ru/category-services')
export const getGlobalInfo = () => axios.get('https://dev.avksrv.ru/global')
export const getPhones = () => axios.get('https://dev.avksrv.ru/callphones')
export const getStocks = () => axios.get('https://dev.avksrv.ru/all-stocks/')
export const putPhones = (id: string | number, data: any) => axios.put(`https://dev.avksrv.ru/callphones/${id}`, data)

// export const queryAPI = (
//     link: string,
//     // setData: { (value: React.SetStateAction<null>): void; (arg0: any): void },
//     // setError: (value: boolean) => void,
// ) => {
//     getAPI.then(item => {
//         if (item.status === 200) {
//             axios
//                 .get(link, {
//                     headers: { Authorization: `Bearer ${item?.data?.jwt}` },
//                 })
//                 .then(({ data, status }) => {
//                     console.log(data)
//                     if (status === 200) {
//                         // setData(data)
//                     } else {
//                         // setError(true)
//                     }
//                 })
//                 .catch(() => {
//                     // setError(true)
//                 })
//         }
//     })
// }
//
// export const queryStaticData = async (link: string) => {
//     return getAPI.then(item => {
//         if (item.status === 200) {
//             console.log('2')
//             return axios
//                 .get(link, {
//                     headers: { Authorization: `Bearer ${item?.data?.jwt}` },
//                 })
//                 .then(response => response.data)
//         }
//     })
// }
//
// export const putDeliver = (link: string, object: {}) => {
//     return getAPI.then(item => {
//         if (item.status === 200) {
//             return axios.post(link, {
//                 deliver: object,
//             })
//         }
//     })
// }