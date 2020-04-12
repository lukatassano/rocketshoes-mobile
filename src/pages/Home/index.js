import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import tenis from '../../assets/tenis1.jpg';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        horizontal
        data={[{key: 'a'}, {key: 'b'}]}
        renderItem={(item) => (
          <View style={styles.box}>
            <Image resizeMode="contain" style={styles.image} source={tenis} />
            
            <View style={{paddingLeft: 10}}>
              <Text style={styles.title}>
                Tênis de Caminhada Leve Confortável
              </Text>
              <Text style={styles.price}>
                R$ 200
              </Text>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>
                  Adicionar
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#333',
  },

  box: {
    borderRadius: 10,
    height: 450,
    width: 280,
    backgroundColor: "#fff",
    marginRight: 15
  },

  image: {
    alignSelf: "center",
    width: "90%"
  },

  title: {
    fontSize: 22,
  },

  price: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: "bold"
  },

  list: {
    flex: 1,
    marginVertical: 1,
    marginTop: 90,
    marginLeft: 15,
  },

  button: {
    backgroundColor: "#7159c1",
    height: 50,
    width: "96%",
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },

  buttonText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  }
});
