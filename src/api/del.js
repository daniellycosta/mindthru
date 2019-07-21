//import axios from 'axios'
import { mockedDB } from 'utils/mockedDB'

export const del = (url, id) => {
	const toDelete = mockedDB[url].filter(item => item.id === id)
	const index = mockedDB[url].indexOf(toDelete[0])
	mockedDB[url].splice(index, 1)
}
