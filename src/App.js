import React from 'react';
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/weather";


const API_KEY = "589d670853bd97c89b57588c7cbad64f"; //извлекаем API

class App extends React.Component {
   state = {
    temp: undefined,
    city: undefined,
    country: undefined,
    pressure: undefined,
    sunset: undefined,
    error: undefined
  }

  gettingWeather= async (e) => { //страничка работает без перезагрузки
    e.preventDefault();
    const city = e.target.elements.city.value;

    //componentDidMount() {
    //localStorage.setItem('defaultCity', city)

    if (city) { //если не вводим город ничего не происходит
      const api_url = await
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`); // получаем данные со страницы api
      const data = await api_url.json();

      let sunset = data.sys.sunset;
      let date = new Date();
      date.setTime(sunset);
      let sunset_date = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        pressure: data.main.pressure,
        sunset: sunset_date,
        error: undefined
      });
    } else {
      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        pressure: undefined,
        sunset: undefined,
        error: "Please enter city"
      });
    }
  }
//}

//componentWillUpdate() {
 // localStorage.getItem('defaultCity');
  //}

  render() {
    return (
      <div className="App">
        <div className="main">
          <div>
            <Info />
          </div>
          <div >
            <Form weatherMethod={this.gettingWeather} />
            <Weather
              temp={this.state.temp}
              city={this.state.city}
              country={this.state.country}
              pressure={this.state.pressure}
              sunset={this.state.sunset}
              error={this.state.error}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;



