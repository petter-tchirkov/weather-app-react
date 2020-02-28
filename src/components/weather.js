import React from 'react'
import App from '../App'
import '../css/weather.css'
import { Spring } from 'react-spring/renderprops'

class Weather extends React.Component {


    render() {
        return (
            <div className="weatherComponent">
                {this.props.city &&
                    <div className="weather">
                        <p className="location">Location: {this.props.city}, {this.props.country}</p>
                        <p className="coordinates">{this.props.lat}, {this.props.lon}</p>
                        <div className="weather__content">
                            <div className="weather__column_date">
                                <p className="naming">Date/Time</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{listItem.dt_txt}</p>
                                )}
                            </div>
                            <div className="weather__column_temp">
                                <p className="naming">Temperature</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{Math.round(listItem.main.temp)} &#8451;</p>
                                )}
                            </div>
                            <div className="weather__column_max-temp">
                                <p className="naming">Max Temperature</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{Math.round(listItem.main.temp_max)} &#8451;</p>
                                )}
                            </div>
                            <div className="weather__column_min-temp">
                                <p className="naming">Min Temperature</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{Math.round(listItem.main.temp_min)} &#8451;</p>
                                )}
                            </div>
                            <div className="weather__column_humidity">
                                <p className="naming">Humidity</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{listItem.main.humidity}%</p>
                                )}
                            </div>
                            <div className="weather__column_pressure">
                                <p className="naming">Pressure</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{listItem.main.pressure} hPa</p>
                                )}
                            </div>
                            <div className="weather__column_weather">
                                <p className="naming">Weather</p>
                                {this.props.data.list.map((listItem) =>
                                    <p key={listItem.id}>{listItem.weather[0].main}</p>
                                )}
                            </div>
                        </div>
                    </div>
                }

                <p>{this.props.error}</p>
            </div >
        )
    }
}
export default Weather



