import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { propTypes } from './propTypes'
import { publicRoutes, adminRoutes, userRoutes } from './routes'

import {Header} from 'common/Header'
import{ MenuLateral }from 'common/MenuLateral'
import {Container} from 'common/Container'
import { language } from 'language';

export class AppComponent extends Component {
	menuLateralRef

	getOpenMenu = ()=>{
		if(this.menuLateralRef){
			return this.menuLateralRef.handleDrawerOpen()
		}else{
			return 
		}
	}

	render(){
		const publicRoutesInstancia = publicRoutes
		const userRoutesInstancia = userRoutes
		const {location,width,classes} = this.props
		const {pathname} = location

		const showMenuIcon = width === 'xs'
		const menuExpanded = width !== 'xs'
		
		return (
			<div className={classes.root}>
				{pathname !== publicRoutes.routes.login.path && (
				<>
					<Header
						showMenuIcon={showMenuIcon}
						openMenu={this.getOpenMenu}
					/>			
					<MenuLateral
						defaultExpanded={menuExpanded}
						onRef ={(menuLateralRef)=>this.menuLateralRef = menuLateralRef}
					/>
				</>
				)}
				<Switch>
					{Object.values(publicRoutesInstancia.routes).map(route => (
						<Route exact {...route} key={route.path} />
					))}
						{Object.values(userRoutesInstancia.routes).map(route => (
						<Route exact {...route} key={route.path} />
					))}
					<Redirect to={publicRoutesInstancia.defaultRedirect} />
				</Switch>
			</div>
		)}
}

AppComponent.propTypes = propTypes
