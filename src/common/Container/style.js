export const style = theme => ({
	root: {
		maxWidth: '100%',
		flexGrow: 1
	},
	item: {
		padding: '75px 25px 25px 25px'
	},
	'@media only screen and (min-width: 830px) and (max-width: 959px)': {
		item: {
			paddingLeft: '0px'
		}
	},
	'@media only screen and (min-width: 960px)': {
		item: {
			paddingLeft: '60px'
		}
	},
	'@media only screen and (min-width: 1250px)': {
		item: {
			paddingLeft: '0px'
		}
	}
})
