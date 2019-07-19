import { LoginFormComponent } from './LoginFormComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'
import { withLastLocation } from 'react-router-last-location'

export const LoginForm = compose(
	withStyles(style),
	withRouter,
	withLastLocation
)(LoginFormComponent)
