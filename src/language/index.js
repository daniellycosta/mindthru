import { ptBr } from './ptBr'

const setLanguage = () => {
	const navigatorLanguage = navigator.language || navigator.userLanguage
	switch (navigatorLanguage) {
		case 'pt-BR':
			return ptBr
		default:
			return ptBr
	}
}
export const language = setLanguage()
