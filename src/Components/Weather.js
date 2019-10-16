import React from 'react';

//weather function displays various weather information
const Weather = (props) => {
    return (
        //props are used from App.js and displayed using paragraph and span tags
        <div className='weather-info'>
            {
                props.country && props.city && <p className="weather__key">Location:
                    <span className="weather__value">  {props.city}, {props.country}</span>
                </p>
            }

            {
                props.temperature && <p className="weather__key">Temperature:
                    <span className="weather__value">  {props.temperature}</span>
                </p>
            }

            {
                props.max && props.min && <p className="weather__key">
                    Maximum: <span className="weather__values"> {props.max}</span> &nbsp;
                    Minimum: <span className="weather__values"> {props.min}</span>
                </p>
            }

            {
                props.humidity && <p className="weather__key">Humidity:
                    <span className="weather__value">  {props.humidity}</span>
                </p>
            }

            {
                props.description && <p className="weather__key">Conditions:
                        <span className="weather__value">  {props.description}</span>
                </p>
            }

            {
                props.error && <p className="weather__error">{props.error}</p>
            }
        </div>
    )
}

//exported for use on other components
export default Weather;