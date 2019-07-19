import React, { Component } from 'react'
import { propTypes } from './propTypes'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Hidden from '@material-ui/core/Hidden'
import classnames from 'classnames'
import { language } from 'language'
import Typography from '@material-ui/core/Typography'
import { publicRoutes } from 'App/routes'
import Button from '@material-ui/core/Button'
import ButtonBase from '@material-ui/core/ButtonBase'
import {Image} from 'common/Image'
import LogoAnimusPlus from 'icons/LogoAnimusPlus.png'

export class FuncionariosComponent extends Component {
	render(){
		return(
			<div>
				funcionarios
			</div>
		)
	}
}

FuncionariosComponent.propTypes = propTypes
