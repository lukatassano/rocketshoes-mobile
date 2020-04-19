import styled from 'styled-components/native';
import { darken } from "polished";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: #333;
`;

export const Box = styled.View`
  border-radius: 10px;
  width: 250px;
  height: 412px;
  background-color: #fff;
  margin: 0 10px;
`;

export const Photo = styled.Image`
  align-self: center;
  border-radius: 5px;
  width: 230px;
  height: 230px;
`;

export const Title = styled.Text.attrs({
  numberOfLines: 2,
})`
  font-size: 22px;
  margin-right: 10px;
`;

export const Price = styled.Text`
  margin-top: 10px;
  font-size: 20px;
  font-weight: bold;
`;

export const List = styled.FlatList`
  margin-top: 40px;
`;

export const Button = styled.TouchableOpacity`
  background-color: #7159c1;
  flex-direction: row;
  height: 50px;
  width: 96%;
  margin-top: 30px;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-right: 40px;
  text-transform: uppercase;
`;

export const ButtonCart = styled.View`
  background-color: ${darken(0.03, '#7159c1')};
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  width: 30%;
  height: 50px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const ButtonCartText = styled.Text`
  font-size: 16px;
  color: #fff;
  margin-left: 8px;
`;
