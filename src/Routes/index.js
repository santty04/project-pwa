import React, { Suspense } from "react"
import { Routes as RoutesDom, Route } from 'react-router-dom'

import Spinner from "../components/Spinner"

import Home from '../pages/Home'

const Recipe = React.lazy(() => import('../pages/Recipe'))
const Timer = React.lazy(() => import('../pages/Timer'))

export const Routes = () => {
	return (
		<Suspense fallback = { <Spinner /> }>
			<RoutesDom>
				<Route index exact path="/" element={ <Home /> }  />
				<Route path="/recipe/:recipeId" element={ <Recipe /> } />
				<Route path="/timer" element={ <Timer /> } />
			</RoutesDom>

		</Suspense>
	)
}
