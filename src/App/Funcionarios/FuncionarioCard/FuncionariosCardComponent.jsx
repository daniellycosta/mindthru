import React,{Component} from 'react'
import propTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {IconButton, Button} from '@material-ui/core/'
import TextField from '@material-ui/core/TextField'
import {Card, CardHeader,Avatar} from '@material-ui/core/'
import {Dialog,DialogTitle,DialogActions,DialogContent} from '@material-ui/core/'
import { language } from 'language';
import { del, patch,get } from 'api'

export class FuncionariosCardComponent extends Component{
	constructor(props){
		super(props)
		this.state={
			openDialog:false,
			funcionarios:[],
			value:{
				name:''
			},
			id:''
		}
	}

	componentDidMount(){
		this.getFuncionarios()
		
	}

	getFuncionarios=()=>{
		const funcionarios = get('funcionarios')
		this.setState({funcionarios})
	}

	update = () =>{
		const {value} = this.state
		const {id} = this.props
		console.log(value)
		patch('funcionarios',value,"1")
		this.getFuncionarios()
		this.handleCloseDialog()
	}

	handleChange = name => event => {
    this.setState({ value:{[name]: event.target.value}});
  }

	handleCloseDialog=()=>{
		this.setState({openDialog:false})
	}

	handleOpenDialog=()=>{
		this.setState({openDialog:true})
	}

	deleteCard=()=>{
		console.log('deletou')
	}

	render(){
		const {classes} = this.props
		const {openDialog,value,funcionarios}= this.state
		
		return (
			<>
			{funcionarios.map(({name,id}) =>
				<Card className={classes.card} key={id}>
					<CardHeader 
					avatar={
					<Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
					}
					action={
						<>
							<IconButton onClick={this.handleOpenDialog}>
								<EditIcon/>
							</IconButton>
							<IconButton onClick={this.deleteCard}>
								<DeleteIcon/>
							</IconButton>
					</>}
					title={name}
				/>
			</Card>)}
			<Dialog open={openDialog} onClose={()=>console.log('fechar')}>
			<DialogTitle className={classes.dialogTitle}>{language.edit}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
						margin="dense"
						value={value.name}
            id="name"
            label={language.name}
						fullWidth
						onChange={this.handleChange('name')}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleCloseDialog} color="primary">
            {language.cancel}
          </Button>
          <Button onClick={this.update} color="primary" variant='contained'>
            {language.ok}
          </Button>
        </DialogActions>
			</Dialog>
			</>
		)}
}

FuncionariosCardComponent.propTypes = {
	classes: propTypes.object
}
