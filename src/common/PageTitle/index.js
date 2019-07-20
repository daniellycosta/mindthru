import { PageTitleComponent } from './PageTitleComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const PageTitle = compose(withStyles(style))(PageTitleComponent)
