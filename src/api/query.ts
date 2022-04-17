import axios from 'axios'

const getPath = () => (process.env.NODE_ENV === 'development' ? 'https://dev.avksrv.ru' : 'https://avksrv.ru')
export const getAPI = axios.post(getPath() + '/admin/login', {
    email: 'innerhard@gmail.com',
    password: 'WhoFuckMe!100505',
})

export const getAuth = (login: string, password: string) =>
    axios.post(getPath() + '/admin/login', {
        email: login,
        password: password,
    })

export const getCategories = () => axios.get(getPath() + '/category-services')
export const getGlobalInfo = () => axios.get(getPath() + '/global')
export const getPhones = () => axios.get(getPath() + '/callphones')
export const getStocks = () => axios.get(getPath() + '/all-stocks/')
export const getCardsBlocks = () => axios.get(getPath() + '/cards-blocks/')
export const getCameraBlocks = () => axios.get(getPath() + '/camera-services/')
export const getWidgetServices = () => axios.get(getPath() + '/widget-services/')
export const putPhones = (id: string | number, data: any) => axios.put(getPath() + `/callphones/${id}`, data)

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
