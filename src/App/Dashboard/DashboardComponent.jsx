import React from 'react'
import { propTypes } from './propTypes'

import {PageTitle} from 'common/PageTitle'
import {Container} from 'common/Container'
import { language } from 'language'

export const DashboardComponent = ({history,classes})=>{

	return(
    <Container>
		<PageTitle title={language.home.singular}/>
    </Container>

	)
}

DashboardComponent.propTypes = propTypes
