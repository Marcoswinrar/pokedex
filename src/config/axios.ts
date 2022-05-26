import axios from 'axios'

const HOST = 'https://pokeapi.co/api/v2'

const instance = axios.create({
  baseURL: HOST,
  timeout: 10000
})

export default instance
