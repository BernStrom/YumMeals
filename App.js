import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import React from 'react';
import { StatusBar, StyleSheet, SafeAreaView, View, Text } from 'react-native';
import { Searchbar } from 'react-native-paper';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchBar}>
          <Searchbar placeholder="Search" />
        </View>
        <View style={styles.list}>
          <Text>Result list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

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
