import React,{Component} from 'react'
import classnames from 'classnames'
import propTypes from 'prop-types'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import {IconButton, Button, Typography} from '@material-ui/core/'
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

	handleCloseDialog=()=>{
		this.setState({openDialog:false})
	}

	handleOpenDialog=()=>{
		this.setState({openDialog:true})
	}
	handleEdit=()=>{
		const { editFunc,id }=this.props
		const { value }=this.state
		editFunc(value,id)
		this.handleCloseDialog()
	}

	render(){
		const {classes,name,id,deleteFunc,editFunc} = this.props
		const {openDialog,value}= this.state
		
		return (
			<>
				<Card className={classnames(classes.card,classes.row)} key={id}>
					<div className={classes.row} onClick={()=>console.log('ver-resultado')}>
						<Avatar className={classes.avatar}>{name.charAt(0)}</Avatar>
						<Typography variant='subtitle1' className={classes.name}>{name}</Typography>
					</div>
					<div>
						<IconButton onClick={this.handleOpenDialog}>
							<EditIcon/>
						</IconButton>
						<IconButton onClick={()=>deleteFunc(id)}>
							<DeleteIcon/>
						</IconButton>
					</div>
			</Card>
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
          <Button onClick={this.handleEdit} color="primary" variant='contained'>
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
