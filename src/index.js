import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Link } from 'react-router-dom'

//COMPONENTS
import Home from './components/home'
import Artist from './components/artist'

const App = () => {
	return (
		<BrowserRouter>
			<div>
				<Route exact path="/" component={Home}/>
				<Route path="/artist/:artistId" component={Artist}/>
			</div>
		</BrowserRouter>
	)
}

ReactDOM.render(<App/>, document.getElementById("root"))