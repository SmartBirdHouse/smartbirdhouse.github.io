import axios from 'axios'

//Funktio ruuvidatan hakemiseksi JSON-Serveriltä.

const baseUrl = 'http://localhost:3001/ruuvidata'

//Funktio hakee kaiken datan serveriltä ja palauttaa promisen.
const haeData = () => {
    return axios.get(baseUrl)
  }

export default {haeData:haeData}