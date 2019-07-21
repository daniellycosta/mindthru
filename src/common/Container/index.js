import { ContainerComponent } from './ContainerComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const Container = compose(
	withStyles(style),
	withRouter
)(ContainerComponent)
