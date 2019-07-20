import { InfoPanelComponent } from './InfoPanelComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const InfoPanel = compose(withStyles(style))(InfoPanelComponent)
