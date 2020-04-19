import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding-top: 40px;
  align-items: center;
  justify-content: flex-start;
  background-color: #333;
`;

export const Box = styled.View`
  background-color: #fff;
  padding: 15px 10px;
  width: 350px;
  border-radius: 10px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const Product = styled.View`
  flex-direction: row;
  height: 105px;
  width: 100%;
`;

export const ProductTitle = styled.Text`
  font-size: 18px;
  margin-left: 10px;
`;

export const ProductImage = styled.Image`
  height: 100px;
  width: 100px;
`;

export const ProductPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-left: 10px;
`;

export const ProductTextArea = styled.View`
  flex: 1;
  align-items: flex-start;
  justify-content: center;
`;

export const ButtonTrash = styled.TouchableOpacity`
  align-self: center;
  margin-right: 10px;
`;

export const Amount = styled.View`
  padding: 0 10px;
  height: 45px;
  width: 100%;
  margin-top: 10px;
  border-radius: 5px;
  background-color: #e1e1e1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const AmountButtons = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;

export const AmountInput = styled.TextInput`
  font-size: 16px;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 60px;
  margin: 0 6px;
  border-radius: 5px;
  background-color: #fff;
`;

export const AmountLess = styled.TouchableOpacity``;

export const AmountMore = styled.TouchableOpacity``;

export const AmountPrice = styled.Text`
  font-size: 20px;
  font-weight: bold;
`;

export const Total = styled.Text`
  font-size: 26px;
  font-weight: bold;
  text-transform: uppercase;
  color: #777;
  margin-top: 20px;
  align-self: center;
`;

export const TotalValue = styled.Text`
  font-size: 50px;
  font-weight: bold;
  align-self: center;
`;

export const ButtonFinish = styled.TouchableOpacity`
  background-color: #7159c1;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  height: 54px;
  width: 100%;
`;

export const ButtonFinishText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
`;

export const EmptyContainer = styled.View`
  background-color: #fff;
  height: 150px;
  width: 90%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 20px;
  margin-top: 10px;
  font-weight: bold;
`;

export const List = styled.FlatList`
`;