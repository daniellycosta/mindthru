import React,{Component} from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {IconButton, Typography} from '@material-ui/core/'
import TextField from '@material-ui/core/TextField'
import {Card,Avatar} from '@material-ui/core/'
import { Dialog } from 'common/Dialog'
import { language } from 'language';
import {history} from 'utils/history'

export class FuncionariosCardComponent extends Component{
	dialogRef

	constructor(props){
		super(props)
		this.state={
			openDialog:false,
			value:{
				name:''
			},
			id:''
		}
	}

	componentDidMount(){
		const {onRef} = this.props
		if(onRef)onRef(this)
	}

	handleChange = name => event => {
    this.setState({ value:{[name]: event.target.value}});
	}
	
	handleOpenDialog=(event)=>{
		if(event.stopPropagation) event.stopPropagation()
		this.dialogRef.handleOpenDialog()
	}

	handleEdit=()=>{
		const { editFunc,id }=this.props
		const { value }=this.state
		editFunc(value,id)
	}

	handleDelete=(event)=>{
		const {id, deleteFunc} = this.props
		if(event.stopPropagation) event.stopPropagation()
		deleteFunc(id)

	}
	goToResult=()=>{
		const {id} = this.props
		history.push(language.funcionarios.selectedRoute+`/${id}`)
	}

	render(){
		const {classes,name,id} = this.props
		const {value}= this.state
		
		return (
			<>
				<Card className={classnames(classes.card,classes.row)} key={id} onClick={()=>this.goToResult()}>
					<div className={classes.row} >
						<Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
						<Typography variant='subtitle1' className={classes.name}>{name}</Typography>
					</div>
					<div>
						<IconButton onClick={this.handleOpenDialog} classes={{root:classes.iconButton}}>
							<EditIcon/>
						</IconButton>
						<IconButton onClick={this.handleDelete} classes={{root:classes.iconButton}}>
							<DeleteIcon/>
						</IconButton>
					</div>
			</Card>
			<Dialog
				title={language.edit}
				onRef={(dialogRef)=>this.dialogRef = dialogRef}
				handleOk={this.handleEdit}
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
			</>
		)}
}

FuncionariosCardComponent.propTypes = {
	classes: propTypes.object
}
