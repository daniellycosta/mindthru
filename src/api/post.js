//import axios from 'axios'
import {mockedDB} from 'utils/mockedDB'

export const post=(url,data)=>{
  let random = Math.floor(Math.random() * (9999 - 0)) + 0
  const id = mockedDB[url].length + 1 + random
  data.id = id.toString()
  data.results={}
  data.resultadosTexto = mockedDB.resultadosTextoDefault
  mockedDB[url].push(data)
}
