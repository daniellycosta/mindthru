import React, { Component } from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import { language } from 'language'
import Typography from '@material-ui/core/Typography'
import { publicRoutes } from 'App/routes'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core/'
import{ListItemIcon} from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'


export const MenuLateralComponent = (props)=>{
	const {history, classes,defaultExpanded}= props

	const itens = [{name:"Funcionarios", children:PeopleIcon, linkTo: '/funcionarios'}]

	return(
		<Drawer
		className={classes.menuLateral} 
		variant={defaultExpanded? "permanent":"persistent"}
		anchor="left"
		classes={{paper:classes.drawerPaper}}
		>
			<List>
				{itens.map(({name,children, linkTo}) => (
					<ListItem button key={name} onClick={()=>history.push(linkTo)}>
						<ListItemIcon>{children}</ListItemIcon>
						<ListItemText primary={name} />
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}

MenuLateralComponent.propTypes = {
	classes: propTypes.object.isRequired,
	defaultExpanded: propTypes.bool
}
MenuLateralComponent.defaultProps={
	defaultExpanded:true,
}



