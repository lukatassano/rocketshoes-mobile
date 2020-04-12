import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// import { Container } from './styles';

export default function Cart() {
  return (
    <View style={styles.container}>
      <Text>Cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
  },
});
