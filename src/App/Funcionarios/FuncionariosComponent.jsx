import React, { Component } from 'react'
import { propTypes } from './propTypes'
import { language } from 'language'
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import TextField from '@material-ui/core/TextField'
import { Container } from 'common/Container'
import { PageTitle } from 'common/PageTitle'
import { Dialog } from 'common/Dialog'
import { FuncionariosCard } from './FuncionarioCard'
import{ post,get,patch,del } from 'api'

export class FuncionariosComponent extends Component {

	funcionariosRefs=[]
	dialogRef

	constructor(props){
		super(props)
		this.state={
			funcionarios:[],
			value:{
				name:''
			}
		}
	}

	componentDidMount(){
		this.getFuncionarios()
	}

	handleChange = name => event => {
    this.setState({ value:{[name]: event.target.value}});
	}
	
	handleClickAdd=()=>{
		this.dialogRef.handleOpenDialog()
	}

	clearForm=()=>{
		this.setState({value:{name:''}})
	}

	addFuncionario=()=>{
		const {value}=this.state
		post('funcionarios',value)
		this.clearForm()
		this.getFuncionarios()
	}

	getFuncionarios=()=>{
		const funcionarios = get('funcionarios')
		this.setState({funcionarios}) 
	}

	editFuncionario=(data,id)=>{
		const formularioData = this.funcionariosRefs.filter((i)=>i.props.id === id)
		const {name} = formularioData[0].props
		this.setState({value:name})
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
		const {funcionarios,value}=this.state
		return(
			<Container>
				<PageTitle title={language.funcionarios.plural}/>
				<div className={classes.cards}>
				{funcionarios.map(({id,name})=>
					<FuncionariosCard
						key={id}
						id={id}
						name={name}
						editFunc={this.updateFuncionario}
						deleteFunc={this.deleteFuncionario}
						onRef={(funcionarioRef)=>this.funcionariosRefs.push(funcionarioRef)}
					/>
				)}
				</div>
				<Fab color='secondary' className={classes.addButton} onClick={this.handleClickAdd}>
					<AddIcon/>
				</Fab>
				<Dialog
					title={language.add}
					onRef={(dialogRef)=>this.dialogRef = dialogRef}
					handleOk={this.addFuncionario}
				>
					<TextField
						autoFocus
						margin="dense"
						value={value.name}
						id="name"
						label={language.name}
						fullWidth
						onChange={this.handleChange('name')}
					/>
				</Dialog>
			</Container>
		)
	}
}

FuncionariosComponent.propTypes = propTypes
