export const style = theme => ({
	container:{
		display:'flex',
		flexDirection:'row',
		justifyContent:'space-around'
	},
	item:{
		marginTop:30
	},
	instr:{
		textAlign:'center',
		marginBottom:10
	},
	icon: {
		fontSize: 32,
		color: theme.palette.gray.dark
	},
	mensagem:{
		textAlign:'center',
		color: theme.palette.gray.dark,
		marginTop:20,
	},
	'@media only screen and (min-width: 1300px)':{
		mensagem:{
			marginTop:'50%'
		},
	},
})
