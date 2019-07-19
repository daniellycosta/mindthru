import React, { Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { propTypes } from './propTypes'
import { publicRoutes, adminRoutes, userRoutes } from './routes'

import {Header} from 'common/Header'
import{ MenuLateral }from 'common/MenuLateral'
import { language } from 'language';

export const AppComponent = props => {
	const publicRoutesInstancia = publicRoutes
	const {location,width,classes} = props
	const {pathname} = location
	
	const showMenuIcon = width === 'xs'
	const menuExpanded = width !== 'xs'

	return (
		<div className={classes.root}>
			{pathname !== publicRoutes.routes.login.path && (
			<>
				<Header showMenuIcon={showMenuIcon}/>
				<MenuLateral defaultExpanded={menuExpanded}/>
			</>
			)}
			<Switch>
				{Object.values(publicRoutesInstancia.routes).map(route => (
					<Route exact {...route} key={route.path} />
				))}
				<Redirect to={publicRoutesInstancia.defaultRedirect} />
			</Switch>
		</div>
	)
}

AppComponent.propTypes = propTypes
