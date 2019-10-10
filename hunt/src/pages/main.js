import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';

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
      <View>
        <Text>{item.title}</Text>
        <Text>{item.description}</Text>

        <TouchableOpacity onPress={() => {}}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View>
      <FlatList
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

export default Main;
