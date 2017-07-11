import React from 'react'
import {Carousel} from 'react-bootstrap'
import './SearchResults.css'
import './MainSlider.css'
import Slider1 from './img/slider_1.jpeg';
import Slider2 from './img/slider_2.jpg';
import Slider3 from './img/slider_3.jpeg';

export default class MainSlider extends React.Component {

  render() {
    return (
  <Carousel>
    <Carousel.Item>
      <img width={1900} height={500} alt="1900x500" src={Slider1}/>
      <Carousel.Caption>
        <h1>RUSZAJ W MIASTO!</h1>
          <h3>Sprawdź, co ciekawego dzieje się wokół Ciebie.</h3>
        <p>Ostatnia impreza w Gdańsku</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1900} height={500} alt="1900x500" src={Slider2}/>
      <Carousel.Caption>
        <h1>LOVE GDAŃSK POLECA!</h1>
        <h3>Najlepszy koncert Jazzowy w Gdańsku</h3>
        <p>11.08.2017 | Środa</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img width={1900} height={500} alt="1900x500" src={Slider3}/>
      <Carousel.Caption>
        <h1>Opener Festival w Gdyni!</h1>
        <h3>Byliśmy tam | Widzimy się za rok</h3>
        <p>11.07.2017 | Środa</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
)
  }
}