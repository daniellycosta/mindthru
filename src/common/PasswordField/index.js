import { PasswordFieldComponent } from './PasswordFieldComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const PasswordField = compose(withStyles(style))(PasswordFieldComponent)
