import React from 'react'
import { language } from 'language'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import InputAdornment from '@material-ui/core/InputAdornment'
import IconButton from '@material-ui/core/IconButton'
import Tooltip from '@material-ui/core/Tooltip'

export class PasswordFieldComponent extends React.Component {
	static propTypes = TextField.propTypes

	state = {
		show: false,
		capsLockOn: false
	}

	shouldComponentUpdate(nextProps, nextState) {
		return (
			this.props.value !== nextProps.value ||
			this.props.error !== nextProps.error ||
			this.state.show !== nextState.show
		)
	}

	setShow = () =>
		this.setState(prevState => ({
			show: !prevState.show
		}))

	verifyCapslock = () => event => {
		this.setState({
			capsLockOn: event.getModifierState('CapsLock')
		})
	}

	render() {
		const { show, capsLockOn } = this.state
		const { buttonString, warnCapsLock, ...rest } = this.props
		return (
			<>
				<TextField
					{...rest}
					onKeyDown={warnCapsLock ? this.verifyCapslock() : null}
					type={show ? 'text' : 'password'}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<Tooltip
									placement="left"
									title={buttonString}
									aria-label={buttonString}
								>
									<IconButton
										tabIndex={-1}
										aria-label="Toggle password visibility"
										onClick={this.setShow}
									>
										{show ? <VisibilityOff /> : <Visibility />}
									</IconButton>
								</Tooltip>
							</InputAdornment>
						)
					}}
				/>
				{capsLockOn && (
					<Typography color="error">
						{language.auth.capsLockActivated}
					</Typography>
				)}
			</>
		)
	}
}
