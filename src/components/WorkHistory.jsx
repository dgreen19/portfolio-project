import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function WorkHistory() {
	return (
		<>
			<Carousel>
				<Carousel.Item>
					<div className="d-block w-100 p-4">
						<h3>Software Engineer II</h3>
						<h4>The Washington Post</h4>
						<p>Nov 2022 - Present</p>
						<p>
							Since joining The Washington Post, I've worked at the intersection
							of engineering and data privacy building the infrastructure that
							keeps the site compliant with an evolving set of global privacy
							regulations, while trying to make compliance itself less of a
							manual burden on other engineers.
						</p>
						<p>
							One of the core projects was building a RESTful privacy API that
							consolidated privacy protocols across dozens of previously siloed
							projects. Before this, updating a privacy requirement meant
							touching each project individually; afterward, a single update
							could propagate sitewide, cutting future update requirements by an
							estimated 90%+.
						</p>
						<p>
							I also led a cross-functional Agile team through sunsetting
							tracking cookies for EU users to bring nearly all Washington Post
							surfaces into GDPR compliance, closing gaps identified during
							legal's compliance review. This meant coordinating between
							engineering and legal throughout, and using AI-assisted
							development to manage refactoring efficiently across 15+
							repositories. In a related effort, I rebuilt the site's cookie
							consent management interface to proactively close gaps against a
							patchwork of regulations — not just GDPR, but state-level laws
							like California's CCPA and Virginia's CDPA.
						</p>
						<p>
							Beyond direct engineering work, I partnered closely with the legal
							team to identify and remediate compliance gaps across Post systems
							work that, per legal and leadership's own risk assessment, helped
							avert an estimated $3-10M in potential litigation exposure. I also
							authored Engineering Resource Documents and ran post-mortem
							analyses on completed projects, work that led to standardized
							testing and release protocols now used across the team,
							streamlining onboarding for new engineers.
						</p>
						<p>
							On the pure engineering side, I built a shared HTML Web Component
							to streamline footer updates sitewide eliminating a recurring,
							redundant task that had previously required multiple developers to
							maintain. Throughout, I've leaned on AI-assisted development tools
							like GitHub Copilot to accelerate delivery across the codebase.
						</p>
						<p>
							Tech Stack: React.js, Next.js, TypeScript, Playwright, Jest, HTML
							Web Components, Jenkins CI/CD, AWS, GitHub Copilot, Claude AI
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="d-block w-100 p-4">
						<h3>Software Engineer</h3>
						<h4>Michigan Aerospace Corporation</h4>
						<p>Jun 2021 - Sep 2022</p>
						<p>
							At Michigan Aerospace, I worked across several distinct projects
							rather than a single product line, which gave me early exposure to
							a wide range of problems.
						</p>
						<p>
							I architected a library of modular Vue.js UI components used
							across multiple application modules, which significantly cut
							development time for new features and brought consistency to a
							previously fragmented user experience. Separately, I inherited a
							Profile page redesign that an external contracting firm had left
							unfinished and, in some places, broken — malformed fields, failing
							validation — and took it through to completion ahead of the
							company's subscription model launch, improving data accuracy and
							reliability in the process.
						</p>
						<p>
							I also built automated unit and integration testing suites for the
							Springmatter application using Jupyter Notebook and Python
							Selenium, which let the team catch regressions earlier in the
							development cycle rather than after they'd caused production
							delays. On a lighter but still valuable front, I integrated weekly
							automated testing suites simulating real user interaction ahead of
							production deployments, shaving 30 minutes off testing execution
							time through automation.
						</p>
						<p>
							Alongside this work, I contributed to two distinct, concurrent
							initiatives. The first was a company-wide contract with Michigan
							State University researchers to build a camera-deployment
							application for identifying endangered species from field cameras
							placed at sites across the state — a project that grew
							significantly in scope over its lifetime. As part of the
							engineering team on this contract, I built a custom Python web
							scraping tool to compile the image datasets the project needed,
							and developed scoring logic that assigned species-match confidence
							likelihoods to field-captured images, feeding structured data into
							an LLM the team was training to recognize endangered species
							across camera deployments spanning dozens of locations statewide.
						</p>
						<p>
							Separately, I engineered a Python-based tool for a Michigan
							Department of Natural Resources water turbidity initiative,
							converting deployed field images into video to significantly speed
							up analysis and improve data accuracy for the research team using
							it.
						</p>
						<p>
							Stack: Vue.js, JavaScript, Python, Selenium, Jupyter Notebook,
							HTML/CSS
						</p>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div className="d-block w-100 p-4">
						<h3>Brooksource</h3>
						<h4>Software Engineer Contract at Ford Motor Credit</h4>
						<p>Feb 2021 - May 2021</p>
						<p>
							A short but hands-on contract role at Ford Motor Credit, working
							within an existing Angular front-end codebase. I paired and
							mob-programmed daily with the team to debug and extend the
							application, building solutions against user-story acceptance
							criteria for functionality, scalability, and performance. I also
							performed weekly software testing and code reviews ahead of
							production launches.
						</p>
						<p>
							The most concrete outcome of this role was engineering and
							deploying client-server A/B testing using Angular and Spring Boot
							— collecting real customer data and using it to drive targeted
							enhancements that improved conversion rates by 15%.
						</p>
						<p>
							Stack: Angular, TypeScript, Java, Spring Boot, JavaScript,
							HTML/CSS, Jenkins CI/CD
						</p>
					</div>
				</Carousel.Item>
			</Carousel>
		</>
	);
}
