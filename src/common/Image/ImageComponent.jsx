import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'

export const ImageComponent = props => {
	const {classes, image,className, alt} = props
	return (
		<img src={image} alt={alt?alt:'image'} className={classnames(className? className:classes.icon)}></img>
	)
}

ImageComponent.propTypes = {
	alt:propTypes.string,
	iconStyle: propTypes.object
}
