import React from 'react';
import './App.css';
import Info from './components/info'
import Form from './components/form'
import Weather from './components/weather'

const API_KEY = `7250b4aa5d0ccdb8e2179a7a8f4185ec`;


class App extends React.Component {



  state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    maxTemp: undefined,
    minTemp: undefined,
    error: undefined,
    lon: undefined,
    lat: undefined,
    weather: undefined,
    data: undefined
  }
  dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July",
      "August", "September", "October", "November", "December"];
    let days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ];
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;


    if (city) {
      const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);


      this.setState({
        temp: data.list[0],
        city: data.city.name,
        country: data.city.country,
        error: undefined,
        data: data,
        lat: data.city.coord.lat,
        lon: data.city.coord.lon
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        maxTemp: undefined,
        minTemp: undefined,
        error: 'Please enter the city',
        lon: undefined,
        lat: undefined,
        weather: undefined
      });
    }
  }

  render() {
    return (
      <div>
        <Info />
        <Form weatherMethod={this.getWeather} />
        <Weather
          data={this.state.data}
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
          maxTemp={this.state.maxTemp}
          minTemp={this.state.minTemp}
          lat={this.state.lat}
          lon={this.state.lon}
          weather={this.state.weather}
          error={this.state.error}
          date={this.dateBuilder}
        />
      </div>
    )
  }
}

export default App;
