import axios from 'axios'
import configURL from '../../config/config.js'
import queryString from 'query-string'
const publicUser = axios.create(
    {
        baseURL: configURL.BASE_URL,
        paramsSerializer: {
            encode: params => queryString.stringify(params)
        }
    }
)

publicUser.interceptors.request.use(async (config) => {
    return {
        ...config,
        headers: {
            "Content-Type": "application/json"
        }
    }
}, async (error) => {
    throw error
})

publicUser.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response
}, (error) => {
    throw error
})

export default publicUser