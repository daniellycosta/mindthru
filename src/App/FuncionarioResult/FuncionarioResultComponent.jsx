import React, { Component } from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import {Typography} from 	'@material-ui/core'	
import { Container } from 'common/Container'
import { PageTitle } from 'common/PageTitle'
import {RadarChart} from 'common/RadarChart'
import { InfoPanel } from 'common/InfoPanel';
import{ get } from 'api'
import { language } from 'language';

export class FuncionarioResultComponent extends Component {

	constructor(props){
		super(props)
		this.state={
			funcionario:{},
		}
	}

	componentDidMount(){
		this.getDadosFuncionario()
	}

	getIdFuncionario(){
		const url = window.location.pathname
		const id = url.substring(url.lastIndexOf('/') + 1)
		return id
	}

	getDadosFuncionario=()=>{
		const id = this.getIdFuncionario()
		//Numa api normal, usar get já com ID pra não precisar filtrar manualmente
		const funcionarios = get('funcionarios')
		const funcionario = funcionarios.filter((f)=>f.id === id)
		this.setState({funcionario:funcionario[0]})
	}

	render(){
		const {classes}=this.props
		const {name,results,resultadosTexto}=this.state.funcionario
		return(
			<Container>
				<PageTitle title={name || ''}/>
				<Grid container className={classes.container}>
					<Grid item md={12} lg={6} >
						<RadarChart data={results}/>
					</Grid>
					<Grid item md={12} lg={6} className={classes.item}>
						<Typography variant='body2' className={classes.instr}>{language.funcionarios.cliqueDimensaoResultado}</Typography>
						<InfoPanel texts={resultadosTexto}/>
					</Grid>
				</Grid>
			</Container>
		)
	}
}

FuncionarioResultComponent.propTypes = propTypes
