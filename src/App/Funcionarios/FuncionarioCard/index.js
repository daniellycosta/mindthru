import { FuncionariosCardComponent } from './FuncionariosCardComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const FuncionariosCard = compose(withStyles(style))(
	FuncionariosCardComponent
)
