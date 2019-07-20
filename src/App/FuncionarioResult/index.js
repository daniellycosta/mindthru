import { FuncionarioResultComponent } from './FuncionarioResultComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const FuncionarioResult = compose(
	withStyles(style),
	withRouter
)(FuncionarioResultComponent)
