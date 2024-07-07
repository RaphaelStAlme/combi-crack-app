import axios from 'axios'

const configData = await axios.get(import.meta.env.BASE_URL + 'config.json')

// Define axios instance
const instance = axios.create({
  baseURL: configData.data['api-url'],
  headers: {
    'Content-Type': 'application/json'
  }
})

// Interceptors

// instance.interceptors.request.use(
//   (request) => {
//     const authStore = useAuthStore()
//     request.headers.Authorization = `Bearer ${authStore.getToken}`
//     console.log('ENTER')
//     return request
//   },
//   (error) => {
//     return Promise.reject(error)
//   }
// )

export default instance
