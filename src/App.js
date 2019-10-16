import React, { Component } from 'react';
import './App.css'; //import css file for styling
import 'bootstrap/dist/css/bootstrap.min.css' //import bootstrap for styling
//Import App components
import Titles from './Components/Titles'; 
import Form from './Components/Form';
import Weather from './Components/Weather';

//API Key identifier
const apiKey = '620d10dceb53efbd814c8e9c787c9ffa';

//Main app component
class App extends Component {
  // initialize dynamic variables using state
  state = {
    temperature: undefined,
    max: undefined,
    min: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  //methods converts temp value from kelvins to celcius
  calcCelcius(temp) {
    return (Math.floor(temp - 273.15));
  }

  //method fetches weather API and changes the value of variables initialized in state
  getWeather = async (e) => {
    e.preventDefault(); //prevents page from refreshing

    const city = e.target.elements.city.value; //city name is assigned to variable city and used in api url when search is conducted
    const country = e.target.elements.country.value; //country name is assigned to variable country and used in api url when search is conducted

    //API data is fetched and converted into a json file for easy reading
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`);
    const response = await api_call.json();

    console.log(response);

    //values of state variables changed on condition that city and country are entered
     if (city && country) {
      this.setState({
        temperature: this.calcCelcius(response.main.temp),
        max: this.calcCelcius(response.main.temp_max),
        min: this.calcCelcius(response.main.temp_min),
        city: response.name,
        country: response.sys.country,
        humidity: response.main.humidity,
        description: response.weather[0].description,
        error: ""
      })
    } else {  //when user does not enter input value(s)
      this.setState({
        error: "Please enter city and country..."
      })
    }
    
  }

  render() { //render app components with various props passed
    return (
      <div className='App'>
        <Titles />
        <Form loadWeather={this.getWeather} />
        <Weather
          temperature={this.state.temperature}
          max={this.state.max}
          min={this.state.min}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error} />
      </div>
    )
  }
}

//exported for use on other components
export default App;