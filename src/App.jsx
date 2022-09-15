import React from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkHistory from './components/WorkHistory'
import LightDark from './components/LightDark'
import Education from './components/Education'
import Contact from './components/Contact'


export default function App() {
  return (
		<div>
			<NavBar>
				<div>
					<LightDark></LightDark>
				</div>
			</NavBar>
			<Header>TEST</Header>
			<Skills></Skills>
			<WorkHistory></WorkHistory>
			<Projects></Projects>
			<Education></Education>
			<Contact></Contact>
		</div>
	);
}
