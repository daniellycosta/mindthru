import { LoadingButtonComponent } from './LoadingButtonComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const LoadingButton = compose(withStyles(style))(LoadingButtonComponent)
