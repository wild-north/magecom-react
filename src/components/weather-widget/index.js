import React, { useEffect, useState } from 'react';
import { weatherInfoConnector } from '../../connector';
import { get } from 'lodash';
import { convertKelvinsToCelsius } from '../../helpers/common';
import Immutable from 'immutable';

window.Immutable = Immutable;

const WeatherInfoComponent = (props) => {
    if (props.isFetching) {
        return (
            <div>Lodaing...</div>
        );
    }

    if (props.hasError) {
        return (
            <h3>Error: { props.errorMessage }</h3>
        );
    }

    if (!props.hasData) {
        return (
            <div>Make your choice!</div>
        );
    }

    const temperature = convertKelvinsToCelsius(get(props, 'data.main.temp'));

    return (
        <div className="weather">
            Temperature: { temperature } С
        </div>
    );
};

const WeatherInfo = weatherInfoConnector(WeatherInfoComponent);

export const WeatherWidget = ({ getData }) => {
    const [city, setCity] = useState('Kharkiv');

    /* @todo: add debounce */

    // useEffect(() => {
    //     getData(city);
    // }, []);

    const onSubmit = ev => {
        ev.preventDefault();

        getData(city);
    };

    return (
        <div>
            <h3>Current Weather</h3>
            <form onSubmit={ onSubmit }>
                <input type="text"
                       value={ city }
                       onChange={ ev => setCity(ev.target.value) }
                />
                <button type="submit">Get Weather</button>
            </form>

            <WeatherInfo/>
        </div>
    )
};
