
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
export default function NavBar() {
  return (
		<header>
			<div id="mobile-menu-close">
				<span>Close</span> <i class="fa fa-times" aria-hidden="true"></i>
			</div>
			<ul id="menu" class="shadow">
				<li>
					<a href="#about">About</a>
				</li>
				<li>
					<a href="#experience">Experience</a>
				</li>
				<li>
					<a href="#education">Education</a>
				</li>
				<li>
					<a href="#projects">Projects</a>
				</li>
				<li>
					<a href="#skills">Skills</a>
				</li>
				<li>
					<a href="#contact">Contact</a>
			  </li>
			</ul>
		</header>
	);
}