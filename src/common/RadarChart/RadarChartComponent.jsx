import React, {Component} from 'react'
import propTypes from 'prop-types'
import {Typography,Divider} from '@material-ui/core'
import Chart from "react-apexcharts";
import { language } from 'language';
import {theme} from 'utils/theme'

export class RadarChartComponent extends Component {

	constructor(props){
		super(props)
	}

	getSeries=()=>{
		const {data} = this.props
		let arraydata = []
		if(data) arraydata = Object.keys(data).map(i => data[i])
			return [{
				name:'',
				data: arraydata
			}]
	}

	getOptions=()=>{
		const jsonCategorias = language.grafico.categorias
		const arrayCategorias = Object.keys(jsonCategorias).map(cat => jsonCategorias[cat]);

		return{
			labels:arrayCategorias,
			colors:[theme.palette.primary.main],
			dataLabels:{
				enabled:false
			},
			tooltip:{
				followCursor: true,
				intersect:false,
			},
			markers: {
				size: 5.5,
				hover: {
					size: 10
				}
			},
			grid:{
				show:false,
				padding: {
					top: 0,
					right: 0,
					bottom: 0,
					left: 0
				}  
			},
			chart:{
				height:280,
				width:	'100%',
				toolbar:{
					show:false
				},
			},
			plotOptions:{
				radar:{
					size:130,
				}
			},
			responsive: [{
				breakpoint: 1000,
				options:{
					plotOptions:{
						radar:{
							size:130,
						}
					},
					chart:{
						height:300,
						width:	'100%'
					},
				}
			},
			{
				breakpoint: 1000,
				options:{
					markers: {
						size: 7,
						hover: {
							size: 10
						}
					}
				}
			}],
		}}

		render(){
		const {classes} = this.props
		let series = this.getSeries()
		return (
			<div className={classes.grafico}>
				<Chart options={this.getOptions()} series={series} type='radar'/>  
			</div>
	)
	}
}

RadarChartComponent.propTypes = {
	data:propTypes.object.isRequired,
}
