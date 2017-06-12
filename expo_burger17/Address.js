/**
 * by Charlie Calvert
 */

import React, {Component} from 'react';
import {
  Alert,
  Button,
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class Address extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: 'expo try state',
      firstName: 'default firstName21',
      lastName: 'default lastName'
    };
    this.index = 0;
    // NOT USED NOW, BUT YOU MIGHT FIND IT HANDY LATER
    this.collection = [];
    this.fetchAddress = this.fetchAddress.bind(this);
    this.getPrevAddress = this.getPrevAddress.bind(this);
    this.getNextAddress = this.getNextAddress.bind(this);
  }

  fetchAddress(event) {
    this.setState({foo:'gone Fetchin...'});
    const that = this;
    //const ip = '168.156.47.60';
    const ip = '10.10.10.201';
    fetch('http://' + ip + ':30025/all-data')
      .then((response) => response.json())
      .then(function(result) {
        that.collection = result.allData;
        //this.collection = result.allData;
        that.setState({
          foo: 'qux success',
          firstName: that.collection[that.index].firstName,
          lastName: that.collection[that.index].lastName
        });
      }).catch(function(ex) {
      that.setState({foo: 'qux error'});
    });
    if (event) {
      event.preventDefault();
    }
  };

  getPrevAddress(event) {
    if (this.index === 0)
      this.index = this.collection.length - 1;
    else
      this.index--;

    this.setState({
      foo: 'Previous Address Loaded',
      firstName: this.collection[this.index].firstName,
      lastName: this.collection[this.index].lastName
    });

    if (event) {
      event.preventDefault();
    }
  };

  getNextAddress(event) {
    if (this.index === this.collection.length - 1)
      this.index = 0;
    else
      this.index++;

    this.setState({
      foo: 'Next Address Loaded',
      firstName: this.collection[this.index].firstName,
      lastName: this.collection[this.index].lastName
    });

    if (event) {
      event.preventDefault();
    }
  };

  render() {
    console.log('Running Render Method');

    return (
      <View>
        <Text style={styles.instructions}>
          State of Foo: {this.state.foo}
        </Text>
        <Text style={styles.instructions}>
          First Name: {this.state.firstName}
        </Text>
        <Text style={styles.instructions}>
          Last Name: {this.state.lastName}
        </Text>

        <Button
          onPress={this.fetchAddress}
          title="Get Data"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={this.getPrevAddress}
          title="Get Prev"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          onPress={this.getNextAddress}
          title="Get Next"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Address', () => Address);
