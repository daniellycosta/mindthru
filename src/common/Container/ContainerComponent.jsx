import React from 'react'
import propTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'	
import Hidden from '@material-ui/core/Hidden'

export const ContainerComponent = (props)=>{
	const {classes,children} = props	
	return(
	<Grid container className={classes.root}>
		<Hidden xsDown>
			<Grid item sm={3} md={2}/>
		</Hidden>
		<Grid item xs={12} sm={9} md={10} className={classes.item}>
			{children}
		</Grid>
	</Grid>
	)
}

ContainerComponent.propTypes = {
	classes: propTypes.object.isRequired,
}




