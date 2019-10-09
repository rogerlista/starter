import React, {useEffect} from 'react';
import {View, Text} from 'react-native';

import api from '../services/api';

function Main() {
  useEffect(() => {
    loadProducts();
  });

  async function loadProducts() {
    const response = await api.get('/products');
    const {docs} = response.data;

    console.log(docs);
  }

  return (
    <View>
      <Text>Página principal</Text>
    </View>
  );
}

Main.navigationOptions = {
  title: 'Main page',
};

export default Main;
