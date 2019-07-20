//import axios from 'axios'
import {mockedDB} from 'utils/mockedDB'

export const post=(url,data)=>{
  data.id = mockedDB[url].length + 1
  data.results={}
  mockedDB[url].push(data)
}
