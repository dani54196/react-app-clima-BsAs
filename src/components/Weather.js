import React, { Component } from 'react'

export default class Weather extends Component {
  state = {
    sensacion_termica: '',
    humedad: '',
    presion: '',
    temperatura: '',
    temperatura_max: '',
    temperatura_min: '',
    velocidad_viendo: '',
    descripcion: ''
  }

  componentDidMount() {
    this.getWeather();
  }

  async getWeather() {
    let cityName = "Buenos Aires";
    const keyApi = "85f6220ea720a16166e4927b3a2f31ad";
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=
    ${cityName},ar&appid=${keyApi}&units=metric`;
    const response = await fetch(API_URL);
    const data = await response.json();

    this.setState({
      sensacion_termica: data.main.feels_like,
      humedad: data.main.humidity,
      presion: data.main.pressure,
      temperatura: data.main.temp,
      temperatura_max: data.main.temp_max,
      temperatura_min: data.main.temp_min,
      velocidad_viendo: data.wind.speed,
      descripcion: data.weather[0].description
    })

    console.log(data.main.temp_max)
  }

  render() {
    return (
      <div className="container">
        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Clima</div>
          <div className="card-body">
            <h5 className="card-title">Buenos Aires</h5>
            <p className="card-text">Temperatura Actual: {this.state.temperatura}</p>
            <p className="card-text">Sensacion Termica: {this.state.sensacion_termica}</p>
            <p className="card-text">Humedad: {this.state.humedad}</p>
            <p className="card-text">Temperatura Maxima:{this.state.temperatura_max}</p>
            <p className="card-text">Temperatura Minima: {this.state.temperatura_min}</p>
          </div>
        </div>
      </div>
    )
  }
}
