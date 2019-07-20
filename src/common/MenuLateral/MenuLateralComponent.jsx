import React, { Component } from 'react'
import propTypes from 'prop-types'
import {userRoutes } from 'App/routes'
import Drawer from '@material-ui/core/Drawer'
import {List, ListItem, ListItemText} from '@material-ui/core/'
import{ListItemIcon} from '@material-ui/core'

export class MenuLateralComponent extends Component{
	constructor(props){
		super(props)
		this.state={
			open: false,
		}
	}

	componentDidMount = () => {
		const { onRef } = this.props
    if (onRef) onRef(this)
	}

	componentWillUnmount = () => {
    const { onRef } = this.props
    if (onRef) onRef(null)
  }
	
	getRoutes = ()=>{
		const routes = Object.keys(userRoutes.routes).map(key=>userRoutes.routes[key])
		return routes.filter(route=>route.showInMenu)
	}

	handleDrawerOpen=()=>{
		this.setState({open:true})
	}

	handleDrawerClose = ()=>{
		this.setState({open:false})
	}

	handleMenuClick=(path)=>{
		const {history}=this.props
		history.push(path)
		this.handleDrawerClose()
	}

	render(){
	const {classes,defaultExpanded}= this.props
	const menuRoutes = this.getRoutes()
	return(
		<Drawer
		className={classes.menuLateral} 
		variant={defaultExpanded? "permanent":"temporary"}
		anchor="left"
		classes={{paper:defaultExpanded?classes.drawerPaper:classes.drawerPaperMobile}}
		open={this.state.open}
		onClose={this.handleDrawerClose}
		>
			<List>
				{menuRoutes.map((route) => (
					<ListItem button key={route.path} onClick={()=>this.handleMenuClick(route.path)}>
						<ListItemIcon>< route.icon /></ListItemIcon>
						<ListItemText primary={route.name} className={classes.itemText} />
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}
}

MenuLateralComponent.propTypes = {
	classes: propTypes.object.isRequired,
	defaultExpanded: propTypes.bool
}
MenuLateralComponent.defaultProps={
	defaultExpanded:true,
}



