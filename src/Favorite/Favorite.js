import React, { useEffect } from 'react';
import styled from 'styled-components';

import { Column, AlignItems } from '../Common/base/Layout';
import Text from '../Common/base/Text/Text';
import BoldText from '../Common/base/Text/BoldText';

const Favorite = ({
  getFavoritiesRequest,
  favorities,
  favoritiesWeather = []
}) => {
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

  useEffect(() => {
    favorities.map(el => getFavoritiesRequest(el.key));
  }, []);
  console.log('favoritiesWeather', favoritiesWeather);
  return (
    <Column style={{ padding: 50 }}>
      <Container>
        <AlignItems style={{ marginTop: 20 }}>
          {favoritiesWeather.map(el => (
            <Card>
              <BoldText>{favorities[0].name}</BoldText>
              <Text>{dayConverter(el.Date)}</Text>
              <Text>{el.Temperature.Metric.Value} &#8457;</Text>
            </Card>
          ))}
        </AlignItems>
      </Container>
    </Column>
  );
};

const Card = styled(Column)`
  width: 10%;
  border: 1px solid black;
  width: 200px;
  height: 100px;
  margin-right: 50px;
  justify-content: center;
  align-items: center;
`;

const Container = styled(Column)`
  border: 1px solid black;
  padding: 50px;
`;

export default Favorite;
