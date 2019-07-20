import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField'
import { language } from 'language'
import { propTypes } from './propTypes'
import { PasswordField } from 'common/PasswordField'
import { LoadingButton } from 'common/LoadingButton'
import { isEmail } from 'utils/isEmail'

export class LoginFormComponent extends Component {
	static propTypes = propTypes

	state = {
		email: '',
		password: '',
		inputErrors: {
			email: '',
			password: ''
		}
	}

	validateInputEmail = value => {
		console.log(value.includes('@') && !isEmail(value))
		return value.includes('@') && !isEmail(value)
			? language.auth.erroEmailInvalido
			: ''
	}

	handleSubmit =() => {
		const { history } = this.props
		history.push(language.home.selectedRoute)
	}

	handleOnChange = variable => event => {
		const value = event.target.value

		this.setState({
			[variable]: value,
			inputErrors: { [variable]: '' }
		})
	}

	render() {
		const { classes } = this.props
		const { email, password, inputErrors } = this.state
		return (
					<div className={classes.margin}>
						<TextField
							required
							autoFocus
							name="email"
							className={classes.margin}
							variant="outlined"
							fullWidth
							label={language.auth.email}
							error={!!inputErrors.email}
							helperText={inputErrors.email}
							onChange={this.handleOnChange('email')}
							value={email}
						/>
						<PasswordField
							buttonString={language.auth.showPassword}
							required
							className={classes.margin}
							name="current-password"
							variant="outlined"
							fullWidth
							label={language.auth.password}
							error={!!inputErrors.password}
							helperText={inputErrors.password}
							onChange={this.handleOnChange('password')}
							value={password}
							warnCapsLock
						/>
						<LoadingButton
							color='primary'
							variant='contained'
							fullWidth
							onClick={()=>this.handleSubmit()}
						>
							{language.auth.entrar}
						</LoadingButton>
					</div>
		)}
}
