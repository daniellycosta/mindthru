import withWidth from '@material-ui/core/withWidth'
import { withRouter } from 'react-router'
import { withStyles } from '@material-ui/core/styles'
import { style } from './style'
import { compose } from 'utils/compose'
import { AppComponent } from './AppComponent'
export const App = compose(
	withWidth(),
	withRouter,
	withStyles(style)
)(AppComponent)
