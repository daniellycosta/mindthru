import { DialogComponent } from './DialogComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const Dialog = compose(withStyles(style))(DialogComponent)
