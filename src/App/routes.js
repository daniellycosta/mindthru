import { Login } from './Login'
import { Dashboard } from './Dashboard'
import { Funcionarios} from './Funcionarios'
import { language } from 'language'

import PeopleIcon from '@material-ui/icons/People'
import DashboardIcon from '@material-ui/icons/Dashboard'

export const adminRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {}
}
export const userRoutes = {
	defaultRedirect: language.home.selectedRoute,
	routes: {
		home:{
			name: language.home.singular,
			path:language.home.selectedRoute,
			component: Dashboard,
			icon: DashboardIcon
		},
		funcionarios:{
			name: language.funcionarios.plural,
			path:language.funcionarios.selectedRoute,
			component:Funcionarios,
			icon: PeopleIcon	
		}
	}
}
export const publicRoutes = {
	defaultRedirect: language.auth.loginRoute,
	routes: {
		login: {
			path: language.auth.loginRoute,
			component: Login
		},
	}
}
