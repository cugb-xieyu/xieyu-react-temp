/* base interceptors for ajax*/

export default function defaultInterceptors(axios) {
  axios.interceptors.request.use(function (config) {
    return config
  }, function (error) {
    return Promise.reject(error)
  })

  axios.interceptors.response.use(function (response) {
    if(response.status < 400) {
      return response
    }
    else {
      return false
    }
  }, function (error) {
    return Promise.reject(error)
  })
}