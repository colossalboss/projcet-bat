const API_KEY = '1b90f98a9a2fa9f8e1c57109590a72ce7ca7d9476bbe0a581d9e8e362e999a58'

const host = 'https://apifootball.com/api/?APIkey=' + API_KEY

export default async (query_params) => {
  console.log('ur', url(query_params))
  return fetch(url(query_params))
    .then((response) => response.json())
    .then((res) => res)
}

const url = (query_params) => {
  let queryString = ''
  for(let k in query_params) {
    queryString += `&${k}=${query_params[k]}`
  }

  return host + queryString
}
