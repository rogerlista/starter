/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <SafeAreaView>
        <View style={styles.body}>
          <Text style={styles.sectionTitle}>Step One</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: '#000',
  },
});

export default App;
