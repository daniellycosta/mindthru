import { DashboardComponent } from './DashboardComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const Dashboard = compose(
	withStyles(style),
	withRouter
)(DashboardComponent)
