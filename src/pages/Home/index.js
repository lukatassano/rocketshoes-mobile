import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import api from '../../services/api';
import Header from '../../components/Header';

import { Container, List, Box, Photo, Title, Price, Button, ButtonText, ButtonCart, ButtonCartText } from './styles';

export default function Home({navigation}) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');

    setProducts(response.data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function navigateToCart(product) {
    navigation.navigate('Cart', {product})
  }

  return (
    <>
    <Header navigation={navigation}/>
    <Container>
      <List
        data={products}
        key={products.id}
        horizontal
        renderItem={({item: product}) => (
          <Box>
            <Photo resizeMode="contain" source={{uri: product.image}} />
              
            <View style={{paddingLeft: 10}}>
              <Title>
                {product.title}
              </Title>
              <Price>
                {product.price}
              </Price>
              <Button onPress={() => navigateToCart(product)} >
                <ButtonCart>
                  <Icon name="cart" size={20} color="#fff" />
                  <ButtonCartText>
                    1
                  </ButtonCartText>
                </ButtonCart>
                <ButtonText>
                  Adicionar
                </ButtonText>
              </Button>
            </View>
          </Box>
        )}
      />
    </Container>
    </>
  );
}

