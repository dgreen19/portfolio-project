import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default function WorkHistory() {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <div className="d-block w-100 p-4">
            <h3>Software Engineer II</h3>
            <h4>The Washington Post</h4>
            <p>Nov 2022 - Present</p>
            <ul>
              <li>Developed and maintained web applications using React</li>
              <li>Collaborated with cross-functional teams</li>
              <li>Improved application performance by 40%</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 p-4">
            <h3>Software Engineer</h3>
            <h4>Michigan Aerospace Corporation</h4>
            <p>Jun 2021 - Sep 2022</p>
            <ul>
              <li>Built responsive user interfaces</li>
              <li>Implemented new features and functionality</li>
              <li>Worked with REST APIs and state management</li>
            </ul>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="d-block w-100 p-4">
            <h3>Brooksource - Software Engineer Contract at Ford Motor Credit</h3>
            <h4>Company C</h4>
            <p>Feb 2021 - May 2021</p>
            <ul>
              <li>Assisted in website development</li>
              <li>Fixed bugs and implemented minor features</li>
              <li>Learned modern web development practices</li>
            </ul>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  )
}
