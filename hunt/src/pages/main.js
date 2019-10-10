import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

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

  return (
    <View>
      <Text>Página principal</Text>
      {docs.map(product => (
        <Text key={product._id}>{product.title}</Text>
      ))}
    </View>
  );
}

Main.navigationOptions = {
  title: 'Main page',
};

export default Main;
