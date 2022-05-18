import axios from 'axios'

const HOST = 'https://pokeapi.co/api/v2'

const instance = axios.create({
  baseURL: HOST,
  timeout: 10000
})

function Fetch() {
  return {
    get: (url) => instance.get(url),
    post: (url, data) => instance.post(url, data),
    put: (url, data) => instance.put(url, data),
    delete: (url, data) => instance.delete(url, data),
    patch: (url, data) => instance.patch(url, data)
  }
}

export default Fetch()
