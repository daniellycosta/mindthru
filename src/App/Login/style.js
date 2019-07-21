export const style = theme => ({
	background: {
		backgroundImage: theme.palette.gradienteDark('45deg'),
		minHeight: '100vh',
		width: '100%'
	},
	root: { maxWidth: '100%', flexGrow: 1 },
	centralizeVertically: {
		padding: 10,
		minHeight: '100vh',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center'
	},
	logoContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		zIndex: 1,
		marginBottom: 15
	},
	formPaper: {
		zIndex: 1,
		padding: 15
	},
	passwordRecoveryContainer: {
		textAlign: 'center'
	},
	passwordRecovery: {
		marginTop: 5,
		marginBottom: 5
	},
	secundaryButton: {
		textTransform: 'none'
	},
	margin: {
		marginTop: 8,
		marginBottom: 8
	}
})
