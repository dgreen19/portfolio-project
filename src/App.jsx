import React, { useState } from 'react'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import WorkHistory from './components/WorkHistory'
import Education from './components/Education'
import Contact from './components/Contact'
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Switch from '@mui/material/Switch';


export default function App() {
  const [darkMode, setDarkMode] = useState(false); // Add this line

  // create a darkTheme function to handle dark theme using createTheme
  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  const toggleSwitchFunction = () => {
    setDarkMode(!darkMode);
  };

  return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			//Adding the switch button
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-end",
				}}
			>
				<Switch checked={darkMode} onChange={toggleSwitchFunction} />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-start",
				}}
			>
				<NavBar></NavBar>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
			<Header>TEST</Header>
			<Skills></Skills>
			<WorkHistory></WorkHistory>
			<Projects></Projects>
			<Education></Education>
        <Contact></Contact>
      </div>
		</ThemeProvider>
	);
}
