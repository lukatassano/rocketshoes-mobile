import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as CartActions from '../../store/modules/cart/actions';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from '../../components/Header';

import api from '../../services/api';
import { formatPrice } from "../../util/format";

import { 
  Container, 
  List, 
  Box, 
  Photo, 
  Title, 
  Price, 
  Button, 
  ButtonText, 
  ButtonCart, 
  ButtonCartText
} from './styles';


function Main({navigation, addToCartRequest, amount}) {
  const [products, setProducts] = useState([]);

  async function loadProducts() {
    const response = await api.get('/products');
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    setProducts(data);
  }

  useEffect(() => {
    loadProducts();
  }, []);

  function handleAddProduct(id) {
    addToCartRequest(id);
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
                  {product.priceFormatted}
                </Price>
                <Button onPress={() => handleAddProduct(product.id)} >
                  <ButtonCart>
                    <Icon name="cart" size={20} color="#fff" />
                    <ButtonCartText>
                      {amount[product.id] || 0}
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

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;
    return amount;
  }, {})
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);