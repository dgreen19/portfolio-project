import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import Project1 from '../assets/project1.png'
import Project2 from '../assets/project2.png'
import Project3 from '../assets/project3.png'

export default function Projects() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Project3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}


