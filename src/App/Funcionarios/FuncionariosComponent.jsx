import React, { Component } from 'react'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import { language } from 'language'
import { userRoutes } from 'App/routes'
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button'
import {Container} from 'common/Container'
import {PageTitle} from 'common/PageTitle'

export class FuncionariosComponent extends Component {
	render(){
		const{classes}=this.props
		return(
			<Container>
					<PageTitle title={language.funcionarios.plural}/>
					<Fab color='secondary' className={classes.addButton}>
						<AddIcon/>
					</Fab>
			</Container>
		)
	}
}

FuncionariosComponent.propTypes = propTypes
