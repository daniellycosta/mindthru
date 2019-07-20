import React, { Component } from 'react'
import { propTypes } from './propTypes'
import { language } from 'language'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import {Container} from 'common/Container'
import {PageTitle} from 'common/PageTitle'
import {FuncionariosCard} from './FuncionarioCard'
import{post,get,patch,del} from 'api'

export class FuncionariosComponent extends Component {

	funcionariosRefs=[]
	
	constructor(props){
		super(props)
		this.state={
			funcionarios:[]
		}
	}

	componentDidMount(){
		this.getFuncionarios()
	}

	addFuncionario=()=>{
		post('funcionarios',{name:'NovoFuncionario'})
		this.getFuncionarios()
	}

	getFuncionarios=()=>{
		const funcionarios = get('funcionarios')
		this.setState({funcionarios}) 
	}

	updateFuncionario=(data,id)=>{
		patch('funcionarios',data,id)
		this.getFuncionarios()
	}

	deleteFuncionario=(id)=>{
		del('funcionarios',id)
		this.getFuncionarios()
	}

	render(){
		const {classes}=this.props
		const {funcionarios}=this.state
		return(
			<Container>
					<PageTitle title={language.funcionarios.plural}/>
					<div className={classes.cards}>
					{funcionarios.map(({id,name})=><FuncionariosCard
						key={id}
						id={id}
						name={name}
						editFunc={this.updateFuncionario}
						deleteFunc={this.deleteFuncionario}
						onRef={(funcionarioRef)=>this.funcionariosRefs.push(funcionarioRef)}/>
					)}
					</div>
					<Fab color='secondary' className={classes.addButton} onClick={this.addFuncionario}>
						<AddIcon/>
					</Fab>
			</Container>
		)
	}
}

FuncionariosComponent.propTypes = propTypes
