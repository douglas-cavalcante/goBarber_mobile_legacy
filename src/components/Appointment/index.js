import React from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Left, Avatar, Info, Name, Time } from './styles';

export default function Appointment() {
  return (
    <Container>
      <Left>
        <Avatar
          source={{
            uri:
              'https://scontent.fjdo1-1.fna.fbcdn.net/v/t1.0-9/59500061_2337781836286662_1118675273634545664_n.jpg?_nc_cat=103&_nc_oc=AQnCC5D809p5Dsz0VSsiqx1dKctMJThkt-TO4o0TN4qtPbrcb7_2cyoJiJKJGZvMa6M&_nc_ht=scontent.fjdo1-1.fna&oh=1b5b18e2765796deb3235706e8ae3122&oe=5DEBD4EA',
          }}
        />
      </Left>

      <Info>
        <Name>Marcelininho</Name>
        <Time>em 3 horas</Time>
      </Info>

      <TouchableOpacity onPress={() => {}}>
        <Icon name="event-busy" size={20} color="#f64c75" />
      </TouchableOpacity>
    </Container>
  );
}
