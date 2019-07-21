//import axios from 'axios'
import { mockedDB } from 'utils/mockedDB'

export const patch = (url, data, id) => {
	const toEdit = mockedDB[url].filter(item => item.id === id)
	toEdit[0].name = data.name
	const index = mockedDB[url].indexOf(toEdit[0])
	mockedDB[url][index] = toEdit[0]
}
