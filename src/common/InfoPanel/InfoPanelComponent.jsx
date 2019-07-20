import React from 'react'
import propTypes from 'prop-types'
import classnames from 'classnames'
import {language} from 'language'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export const InfoPanelComponent=(props)=>{
  const {classes,texts} = props
  const [expanded, setExpanded] = React.useState(false)

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
	}
	
	const jsonCategorias = language.grafico.categorias
	let panelsTitle= Object.keys(jsonCategorias).map(cat => jsonCategorias[cat]);
	let panelsText = texts? Object.keys(texts).map(i => texts[i]):[]

  return (
    <div className={classes.root}>
      { panelsText.map((panelText,i)=>(
				<ExpansionPanel key={`panel${i}`} expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography className={classes.heading}>{panelsTitle[i]}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {panelText}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
			))
			}
    </div>
  )
}

