import React from 'react'
import propTypes from 'prop-types'
import {Typography,Divider} from '@material-ui/core'

export const PageTitleComponent = props => {
	const {classes, title} = props
	return (
		<>
		<Typography variant="h5" component="h3" className={classes.title}>{title}</Typography>
		<Divider/>
		</>
	)
}

PageTitleComponent.propTypes = {
	title:propTypes.string.isRequired,
}
