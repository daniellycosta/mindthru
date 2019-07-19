import React from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import propTypes from 'prop-types'
import classnames from 'classnames'

export const LoadingButtonComponent = props => {
	const { loading, classes, loadingClasses, ...buttonProps } = props
	return (
		<Button {...buttonProps} disabled={props.disabled || loading}>
			{props.children}
			{!!loading && (
				<CircularProgress
					color={props.color || 'secondary'}
					className={classnames(loadingClasses, classes.loading)}
					size={20}
				/>
			)}
		</Button>
	)
}

LoadingButtonComponent.propTypes = {
	...Button.propTypes,
	loading: propTypes.bool,
	loadingClasses: propTypes.object
}
LoadingButtonComponent.defaultProps = {
	loading: false
}
