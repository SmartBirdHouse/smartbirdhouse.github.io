import axios from 'axios'
const baseUrl = 'http://localhost:3001/ruuvidata'

const haeData = () => {
    return axios.get(baseUrl)
  }

export default {haeData:haeData}