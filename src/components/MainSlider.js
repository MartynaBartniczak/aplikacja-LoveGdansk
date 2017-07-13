import React from 'react'
import {Carousel} from 'react-bootstrap'
import './SearchResults.css'
import './MainSlider.css'
import Slider1 from './img/slider_1.jpeg';
import Slider2 from './img/slider_2.jpg';
import Slider3 from './img/slider_3.jpeg';
import Slider4 from './img/slider_4.jpg';

export default class MainSlider extends React.Component {

  render() {
    return (
  <Carousel>
    <Carousel.Item>
      <img width={1920} height={450} alt="1900x450" src={Slider4}/>
      <Carousel.Caption>
        <h1>RUSZAJ W MIASTO!</h1>
          <h3>Sprawdź, co ciekawego dzieje się wokół Ciebie.</h3>
        <p>Ostatnia impreza w Gdańsku</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1920} height={450} alt="1900x450" src={Slider4}/>
      <Carousel.Caption>
        <h1>LOVE GDAŃSK POLECA!</h1>
        <h3>Najlepszy koncert Jazzowy w Gdańsku</h3>
        <p>11.08.2017 | Środa</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
  }
}