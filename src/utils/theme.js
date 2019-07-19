import { createMuiTheme } from '@material-ui/core/styles'
const CLARO = '#8c6ac1'
const MEDIO = '#5c3e90'
const ESCURO = '#2d1562'
export const theme = createMuiTheme({
	overrides: {
		MuiButton: {
			contained: {
				boxShadow: 'none'
			},
			root: {
				borderRadius: 10
			}
		},
		MuiOutlinedInput: {
			notchedOutline: {
				borderRadius: 10
			}
		},
		MuiPaper: {
			elevation2: { boxShadow: '0px 2px 5px #0003' },
			rounded: {
				// Name of the rule
				borderRadius: 10
			}
		}
	},
	typography: {
		useNextVariants: true
	},
	borderRadius: 10,
	palette: {
		alternativeBackground: '#eeeeee',
		gray: { light: '#f5f5f5', main: '#dddddd', dark: '#666666' },
		white: '#ffffff',
		gradientWhite: (deg = '0deg') =>
			`linear-gradient(${deg},#ffffff00,#ffffff22)`,
		gradientLight: (deg = '0deg') =>
			`linear-gradient(${deg},${MEDIO},${CLARO})`,
		gradienteDark: (deg = '0deg') =>
			`linear-gradient(${deg},${ESCURO},${MEDIO})`,
		gradient: (deg = '0deg') => `linear-gradient(${deg},${ESCURO},${CLARO})`,
		primary: {
			light: CLARO,
			main: MEDIO,
			dark: ESCURO,
			contrastText: '#ffffff'
		},
		secondary: {
			light: '#ffd149',
			main: '#ffa000',
			dark: '#c67100',
			contrastText: '#000000'
		}
	}
})
