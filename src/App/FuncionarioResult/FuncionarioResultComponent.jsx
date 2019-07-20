import React, { Component } from 'react'
import { propTypes } from './propTypes'
import { language } from 'language'
import Grid from '@material-ui/core/Grid'	
import { Container } from 'common/Container'
import { PageTitle } from 'common/PageTitle'
import {RadarChart} from 'common/RadarChart'
import{ get } from 'api'

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
		const {name,results}=this.state.funcionario
		return(
			<Container>
				<PageTitle title={name || ''}/>
				<Grid container className={classes.container}>
					<Grid item md={12} lg={6}>
						<RadarChart data={results}/>
					</Grid>
					<Grid item item md={12} lg={6} className={classes.item}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eleifend ultrices ultricies. Integer et efficitur diam, vel fringilla sapien. Aenean vel pellentesque lorem, finibus interdum risus. Pellentesque eget laoreet enim, ac tincidunt ante. Mauris porttitor pellentesque sodales. Ut purus lorem, tristique sed magna in, rhoncus consequat arcu. Praesent imperdiet placerat tempor.


					</Grid>
				</Grid>
			</Container>
		)
	}
}

FuncionarioResultComponent.propTypes = propTypes
