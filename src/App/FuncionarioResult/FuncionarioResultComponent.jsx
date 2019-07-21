import React, { Component } from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import WarningIcon from '@material-ui/icons/Warning'
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
		const funcionario = funcionarios.filter((f)=>f.id.toString() === id.toString())
		this.setState({funcionario:funcionario[0]})
	}

	render(){
		const {classes}=this.props
		const {funcionario}=this.state
		let renderizarGrafico = funcionario.results && JSON.stringify(funcionario.results) !== '{}'

		return(
			<Container>
				<PageTitle title={funcionario.name || ''}/>
				<Grid container className={classes.container}>
					<Grid item md={12} lg={6} >
						{renderizarGrafico ? <RadarChart data={funcionario.results}/>:(
							<div className={classes.mensagem}>
								<>
									<Typography variant='body1'>
										{language.funcionarios.naoFezTeste}
									</Typography>
									<WarningIcon className={classes.icon}/>
								</>
							</div>	
						)}
					</Grid>
					<Grid item md={12} lg={6} className={classes.item}>
						<Typography variant='body2' className={classes.instr}>{language.funcionarios.cliqueDimensaoResultado}</Typography>
						<InfoPanel texts={funcionario.resultadosTexto}/>
					</Grid>
				</Grid>
			</Container>
		)
	}
}

FuncionarioResultComponent.propTypes = propTypes
