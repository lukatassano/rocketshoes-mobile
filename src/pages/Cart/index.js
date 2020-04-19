import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as CartActions from '../../store/modules/cart/actions'

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconMd from "react-native-vector-icons/MaterialIcons";
import { formatPrice } from "../../util/format";
import { 
  Container,
  Box,
  Product, 
  ProductTitle,
  ProductImage, 
  ProductPrice, 
  ProductTextArea, 
  ButtonTrash, 
  Amount, 
  AmountButtons, 
  AmountLess, 
  AmountMore, 
  AmountInput,
  AmountPrice,
  Total,
  TotalValue,
  ButtonFinish,
  ButtonFinishText,
  EmptyContainer,
  EmptyText,
  List
} from './styles';

import Header from '../../components/Header';

function Cart({navigation}) {
  
  
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <>
      <Header navigation={navigation}/>
      <Container>
        
        {products.length ? (
        <Box>
          {products.map(product => (
          <>
            <Product key={product.id}>
            <ProductImage source={{uri: product.image}} resizeMode={"contain"} />
            <ProductTextArea>
              <ProductTitle>{product.title}</ProductTitle>
              <ProductPrice>{formatPrice(product.price)}</ProductPrice>
            </ProductTextArea>
            <ButtonTrash onPress={() => dispatch(CartActions.removeFromCart(product.id))}>
              <Icon name="trash-can" color="#7159c1" size={28} />
            </ButtonTrash>
          </Product>
          <Amount>
          <AmountButtons>
            <AmountLess onPress={() => decrement(product)}>
              <IconMd name="remove-circle-outline" size={25} color="#7159c1" />
            </AmountLess>
            <AmountInput>
              {String(product.amount)}
            </AmountInput>
            <AmountMore onPress={() => increment(product)}>
              <IconMd name="add-circle-outline" size={25} color="#7159c1" />
            </AmountMore>
          </AmountButtons>
          <AmountPrice>
          {product.subtotal}
          </AmountPrice>
          </Amount>
          <Total>
            Total
          </Total>
          <TotalValue>
            {totalPrice}
          </TotalValue>
          <ButtonFinish>
            <ButtonFinishText>
              FINALIZAR PEDIDO
            </ButtonFinishText>
          </ButtonFinish>
          </>
          ))}
          
        </Box> 
        )  :  (
        <EmptyContainer>
          <IconMd name="remove-shopping-cart" size={64} color="#ddd" />
          <EmptyText>Seu carrinho está vazio.</EmptyText>
        </EmptyContainer>
      )}
      </Container>
    </>
  );
}

export default Cart;