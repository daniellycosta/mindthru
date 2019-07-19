import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { Funcionarios} from './Funcionarios'
import { language } from 'language'

import PeopleIcon from '@material-ui/icons/People'

export const adminRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {}
}
export const userRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {}
}
export const publicRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {
		login: {
			path: language.auth.loginRoute,
			component: Login
		},
		home:{
			path:'/home',
			component: Dashboard
		},
		funcionarios:{
			path:'/funcionarios',
			component:Funcionarios,
			icon: PeopleIcon	
		}
	}
}
