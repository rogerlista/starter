import React from 'react';

import {View, Text} from 'react-native';

function Main() {
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
