import React, { Component } from 'react'
import propTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {AccountCircle} from '@material-ui/icons/';
import MenuIcon from '@material-ui/icons/Menu';
import { language } from 'language';

export class HeaderComponent extends Component {

	constructor(props){
		super(props)
		this.state={
			anchorEl:null
		}
	}
	
	handleClick = (event)=>{
		this.setState({anchorEl:event.currentTarget})
  }
	
  handleClose = ()=>{
		this.setState({anchorEl:null})
	}
	
	handleClickSair=()=>{
		this.props.history.push(language.auth.loginRoute)
	}
	render(){
		const {classes,showMenuIcon,openMenu}= this.props
		const gutterClass = showMenuIcon? classes.toolbar :''
		return(
			<>
				<AppBar position="fixed">
					<Toolbar classes={{gutters:gutterClass}}>
						{showMenuIcon &&
						<IconButton edge="start"  color="inherit" onClick={openMenu}>
        			<MenuIcon />
						</IconButton>
						}
						<Typography variant="h6" color="inherit">{language.animus}</Typography>
      			<IconButton className={classes.iconButton} onClick={this.handleClick}  color="inherit">
       				<AccountCircle />
      			</IconButton>
      		</Toolbar>
  			</AppBar>
				<Menu
					id="menu-logout"
					anchorEl={this.state.anchorEl}
					keepMounted
					open={Boolean(this.state.anchorEl)}
					onClose={this.handleClose}
					classes={{paper:classes.menuProfile}}
					>
					<MenuItem onClick={this.handleClickSair}>{language.auth.sair}</MenuItem>
				</Menu>
			</>
)}}

HeaderComponent.propTypes = {
	classes:propTypes.object.isRequired,
	history:propTypes.object.isRequired,
	showMenuIcon: propTypes.bool
}

HeaderComponent.defaultProps={
	showMenuIcon: true
}
