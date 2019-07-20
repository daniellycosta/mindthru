import { RadarChartComponent } from './RadarChartComponent'
import { withStyles } from '@material-ui/core/styles'
import { compose } from 'utils/compose'
import { style } from './style'
export const RadarChart = compose(withStyles(style))(RadarChartComponent)
