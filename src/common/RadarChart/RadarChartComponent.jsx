import React from 'react'
import propTypes from 'prop-types'
import {Typography,Divider} from '@material-ui/core'
import Chart from "react-apexcharts";
import { language } from 'language';

export const RadarChartComponent = props => {
	const {classes, title} = props

	const getOptions=()=>{
		const jsonCategorias = language.grafico.categorias
		const arrayCategorias = Object.keys(jsonCategorias).map(cat => jsonCategorias[cat]);

		const confChart = {
			chart: {
				type: 'radar'
			},
			series: [{
				name: '',
				data: [30,40,45,50,49,60,70,91,125,55,30,40,45,50,49,60,70,91,125,55,56]
			}],
			options:{
			labels: arrayCategorias,
			title:{text:'Teste'}
		}
		}
		return confChart

	}

	const {options,series} = getOptions()

	
	return (
		<>
		<Chart options={options} series={series} type="radar" height="500" />  
		</>
	)
}

RadarChartComponent.propTypes = {
	//data:propTypes.object.isRequired,
}
