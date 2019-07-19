import { ImageComponent } from './ImageComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const Image = compose(withStyles(style))(ImageComponent)
