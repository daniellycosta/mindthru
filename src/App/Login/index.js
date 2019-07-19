import { LoginComponent } from './LoginComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const Login = compose(
	withStyles(style),
	withRouter
)(LoginComponent)
