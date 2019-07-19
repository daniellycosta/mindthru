import { FuncionariosComponent } from './FuncionariosComponent'
import { withStyles } from '@material-ui/core/styles'
import { withRouter } from 'react-router'
import { compose } from 'utils/compose'
import { style } from './style'

export const Funcionarios = compose(
	withStyles(style),
	withRouter
)(FuncionariosComponent)
