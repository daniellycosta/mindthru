import React, { Component } from 'react'
import propTypes from 'prop-types'
import {Dialog,DialogActions,DialogContent,DialogTitle} from '@material-ui/core'
import Button from '@material-ui/core/Button'
import {language} from 'language'
import classnames from 'classnames'

export class DialogComponent extends Component {
	constructor(props){
		super(props)
		this.state={
			openDialog:false
		}
	}

	componentDidMount(){
		const {onRef}=this.props
		if(onRef)onRef(this)
	}

	handleCloseDialog=()=>{
		this.setState({openDialog:false})
	}

	handleOpenDialog=()=>{
		this.setState({openDialog:true})
	}

	handleClickOk=()=>{
		const{handleOk}=this.props
		if(handleOk) handleOk()
		this.handleCloseDialog()
	}

	render(){
		const {classes,children,title} = this.props
		const {openDialog} = this.state
		return (
			<Dialog open={openDialog}>
			<DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
				<DialogContent>
					{children}
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleCloseDialog} color="primary">
						{language.cancel}
					</Button>
					<Button onClick={this.handleClickOk} color="primary" variant='contained'>
						{language.ok}
					</Button>
				</DialogActions>
			</Dialog>
		)}
}

DialogComponent.propTypes = {
	alt:propTypes.string,
	iconStyle: propTypes.object
}
