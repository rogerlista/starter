import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';

import api from '../services/api';

function Main() {
  const [count, setCount] = useState(0);
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const response = await api.get('/products');
    const {docs} = response.data;

    setDocs(docs);
  }

  function renderItem({item}) {
    return (
      <View style={styles.productContainer}>
        <Text style={styles.productTitle}>{item.title}</Text>
        <Text style={styles.productDescription}>{item.description}</Text>

        <TouchableOpacity style={styles.productButton} onPress={() => {}}>
          <Text style={styles.productButtonText}>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={docs}
        keyExtractor={item => item._id}
        renderItem={renderItem}
      />
    </View>
  );
}

Main.navigationOptions = {
  title: 'Main page',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  list: {
    padding: 20,
  },

  productContainer: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
  },

  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },

  productDescription: {
    fontSize: 16,
    color: '#999',
    marginTop: 5,
    lineHeight: 24,
  },

  productButton: {
    height: 42,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#da552f',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  productButtonText: {
    fontSize: 16,
    color: '#da552f',
    fontWeight: 'bold',
  },
});

export default Main;
