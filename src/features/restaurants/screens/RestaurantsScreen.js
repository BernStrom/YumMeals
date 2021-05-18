import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View } from 'react-native';
import { Searchbar } from 'react-native-paper';

import { RestaurantInfo } from '../components/RestaurantInfo';

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.searchBar}>
      <Searchbar placeholder="Search" />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchBar: {
    padding: 20,
    backgroundColor: '#33FF90',
  },
  list: {
    flex: 1,
    padding: 20,
    backgroundColor: '#33A8FF',
  },
});
