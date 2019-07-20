import React, { Component } from 'react'
import { propTypes } from './propTypes'
import classnames from 'classnames'
import { language } from 'language'
import {get} from 'api'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Container} from 'common/Container'
import {PageTitle} from 'common/PageTitle'
import {FuncionariosCard} from './FuncionarioCard'

export class FuncionariosComponent extends Component {
	constructor(props){
		super(props)
	}
	render(){
		const {classes}=this.props		
		return(
			<Container>
					<PageTitle title={language.funcionarios.plural}/>
					<div className={classes.cards}>
						<FuncionariosCard/>
					</div>
					<Fab color='secondary' className={classes.addButton}>
						<AddIcon/>
					</Fab>
			</Container>
		)
	}
}

FuncionariosComponent.propTypes = propTypes
