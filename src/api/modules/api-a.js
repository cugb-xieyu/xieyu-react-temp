import fetch from '@/api/api-base'

export const apiModuleA = { 
  getData: params => fetch({method: 'GET', url: '/api/getdata', params}),
  postData: data => fetch({method: 'POST', url: '/api/postdata', data}),
}