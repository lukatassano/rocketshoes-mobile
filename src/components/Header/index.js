import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import logo from '../../assets/logo.png'

import { Container } from './styles';

export default function Header({navigation}) {

  return (
    <Container>
      <Image
        source={logo}
        resizeMode="contain"
        style={{width: 180, marginLeft: 20}}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="basket" size={30} color="#fff" />
      </TouchableOpacity>        
    </Container>
  );
}
