import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  JustifyContentCenter,
  Column,
  SpaceBetween,
  AlignItems
} from '../Common/base/Layout';
import Text from '../Common/base/Text/Text';
import BoldText from '../Common/base/Text/BoldText';

import solidHeart from '../assets/icons/heart-solid.svg';
import regularHeart from '../assets/icons/heart-regular.svg';
import { Button } from '@material-ui/core';
import Autosuggest from 'react-autosuggest';
const Main = ({
  currentWeather = {},
  getWeatherRequest,
  getCityRequest,
  city,
  getForecastRequest,
  forecast = [],
  addToFavorite
}) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [metric, setMetric] = useState(true);
  const [favorite, setFavorite] = useState(false);
  const [selectedCity, setSelectedCity] = useState({
    name: 'Tel Aviv',
    key: '215854'
  });
  useEffect(() => {
    getWeatherRequest('215854');
    getForecastRequest('215854');
  }, []);

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const dayConverter = date => {
    const day = new Date(date);
    return days[day.getDay()];
  };

  const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : city.cities &&
          city.cities.filter(
            city =>
              city.LocalizedName.toLowerCase().slice(0, inputLength) ===
              inputValue
          );
  };

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getCityRequest(value);
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestionValue = suggestion => {
    getWeatherRequest(suggestion.Key);
    setSelectedCity({ name: suggestion.LocalizedName, key: suggestion.Key });
    return suggestion.LocalizedName;
  };

  const inputProps = {
    placeholder: 'Search city',
    value,
    onChange
  };

  const renderSuggestion = suggestion => (
    <div style={{ cursor: 'pointer' }}>{suggestion.LocalizedName}</div>
  );
  return (
    <Column style={{ padding: 50 }}>
      <JustifyContentCenter>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </JustifyContentCenter>
      <Container>
        <Heading>
          <Column>
            <BoldText>{selectedCity.name}</BoldText>
            {metric ? (
              <Text>
                {currentWeather.Temperature &&
                  currentWeather.Temperature.Metric.Value}
                &#8451;
              </Text>
            ) : (
              <Text>
                {currentWeather.Imperial &&
                  currentWeather.Temperature.Imperial.Value}
                &#8457;
              </Text>
            )}
            <Button onClick={() => setMetric(!metric)}>
              Click to switch metrics
            </Button>
          </Column>
          <AlignItems>
            {favorite ? (
              <img
                style={{ width: 25, height: 25 }}
                src={solidHeart}
                alt="heart"
              />
            ) : (
              <img
                style={{ width: 25, height: 25 }}
                src={regularHeart}
                alt="heart"
              />
            )}
            <Button
              onClick={() => {
                setFavorite(!favorite);
                addToFavorite(selectedCity);
              }}
            >
              Add to Favorites
            </Button>
          </AlignItems>
        </Heading>
        <BoldText>What is the weather</BoldText>
        <AlignItems style={{ marginTop: 20 }}>
          {forecast.map(el => (
            <Card>
              <Text>{dayConverter(el.Date)}</Text>
              <Text>{el.Temperature.Minimum.Value} &#8457;</Text>
            </Card>
          ))}
        </AlignItems>
      </Container>
    </Column>
  );
};

const Container = styled(Column)`
  border: 1px solid black;
  padding: 50px;
`;

const Heading = styled(SpaceBetween)``;

const Card = styled(Column)`
  width: 10%;
  border: 1px solid black;
  width: 150px;
  height: 100px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
`;

export default Main;
