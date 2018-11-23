import Axios from 'axios'
import interceptors from './interceptors'
import Configs from '@/config'

const fetch = Axios.create({
  baseURL: Configs.apiRoot
})

interceptors(fetch)

export default fetch