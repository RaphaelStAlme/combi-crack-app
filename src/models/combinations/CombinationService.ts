import http from '../../services/AxiosConfig'

async function getCombinations() {
  return await http.get('/combinations')
}

async function postValidation(combination: string, validate: boolean) {
  return await http.post('/combinations/validate', {
    combination: combination,
    validate: validate
  })
}

export default {
  getCombinations,
  postValidation
}
