//import axios from 'axios'
import { mockedDB } from 'utils/mockedDB'

export const get = url => {
	return mockedDB[url]
}
