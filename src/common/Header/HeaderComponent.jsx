import React from 'react'
import propTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import {AccountCircle, Menu} from '@material-ui/icons/';

export const HeaderComponent = (props) => {
	const {classes,showMenuIcon,history}= props
	const gutterClass = showMenuIcon? classes.toolbar :''
	return(
		<AppBar position="fixed">
    	<Toolbar classes={{gutters:gutterClass}}>
				{showMenuIcon &&
				<IconButton edge="start"  color="inherit">
        	<Menu/>
				</IconButton>
				}
				<Typography variant="h6" color="inherit" onClick={()=>history.push('/home')}>AnimusPlus</Typography>
      	<IconButton className={classes.iconButton}  color="inherit">
       		<AccountCircle />
      	</IconButton>
      </Toolbar>
  </AppBar>
)}

HeaderComponent.propTypes = {
	classes:propTypes.object.isRequired,
	history:propTypes.object.isRequired,
	showMenuIcon: propTypes.bool
}

HeaderComponent.defaultProps={
	showMenuIcon: true
}
