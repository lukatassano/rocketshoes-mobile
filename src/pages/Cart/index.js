import React from 'react';
import { useRoute } from "@react-navigation/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import IconMd from "react-native-vector-icons/MaterialIcons";
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
  ButtonFinishText
} from './styles';

import Header from '../../components/Header';

export default function Cart({navigation}) {
  const route = useRoute();
  const product = route.params.product;

  console.tron.log(product);

  return (
    <>
    <Header navigation={navigation}/>
    <Container>
      <Box>
        <Product>
          <ProductImage source={{uri: product.image}} resizeMode={"contain"} />
          <ProductTextArea>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductPrice>{product.price}</ProductPrice>
          </ProductTextArea>
          <ButtonTrash>
            <Icon name="trash-can" color="#7159c1" size={28} />
          </ButtonTrash>
        </Product>
        <Amount>
         <AmountButtons>
           <AmountLess>
             <IconMd name="remove-circle-outline" size={25} color="#7159c1" />
           </AmountLess>
           <AmountInput>
            1
           </AmountInput>
           <AmountMore>
             <IconMd name="add-circle-outline" size={25} color="#7159c1" />
           </AmountMore>
         </AmountButtons>
         <AmountPrice>
          {product.price}
         </AmountPrice>
        </Amount>
        <Total>
          Total
        </Total>
        <TotalValue>
          {product.price}
        </TotalValue>
        <ButtonFinish>
          <ButtonFinishText>
            FINALIZAR PEDIDO
          </ButtonFinishText>
        </ButtonFinish>
      </Box>
    </Container>
    </>
  );
}

