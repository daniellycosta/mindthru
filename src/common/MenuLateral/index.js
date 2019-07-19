import { MenuLateralComponent } from './MenuLateralComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const MenuLateral = compose(
	withStyles(style),
	withRouter
)(MenuLateralComponent)
