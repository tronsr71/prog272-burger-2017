import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Address from "./Address";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Expo Burger!
        </Text>
        <Text>PUT THE ADDRESS COMPONENT JUST BELOW HERE.</Text>
        <Address/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    alignItems: 'center',
    justifyContent: 'center'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },

});
