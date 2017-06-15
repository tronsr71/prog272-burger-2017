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
      firstName: 'default BB',
      lastName: 'default last'
    };
    this.index = 0;
    // NOT USED NOW, BUT YOU MIGHT FIND IT HANDY LATER
    this.collection = [];
    this.removeAddressData = this.removeAddressData.bind(this);
    this.insertAddressData = this.insertAddressData.bind(this);
    this.fetchAddress = this.fetchAddress.bind(this);
    this.getPrevAddress = this.getPrevAddress.bind(this);
    this.getNextAddress = this.getNextAddress.bind(this);
  }

  removeAddressData(event) {
    this.setState({foo:'Beginning Empty...'});
    const that = this;
    //const ip = '168.156.47.60'; //Charlie's Box
    //const ip = '10.11.3.104';   //BC EDUROAM Wireless
    const ip = '10.10.10.201';    //Jeff Home
    fetch('http://' + ip + ':30025/emptyCollection')
      .then((response) => response.json())
      .then(function(result) {
        if (result.result === "collection removed") {
          that.setState({
            foo: 'Collection Emptied',
          });
        }

        else
          that.setState({
            foo: 'Error Emptying Data'
          });

      }).catch(function(ex) {
      that.setState({foo: 'qux error'});
    });
    if (event) {
      event.preventDefault();
    }
  };

  insertAddressData(event) {
    this.setState({foo:'Beginning Insert...'});
    const that = this;
    //const ip = '168.156.47.60'; //Charlie's Box
    //const ip = '10.11.3.104';   //BC EDUROAM Wireless
    const ip = '10.10.10.201';    //Jeff Home
    fetch('http://' + ip + ':30025/insertValidCollection')
      .then((response) => response.json())
      .then(function(result) {
        if (result.totalSaved === 102) {
          that.setState({
            foo: 'Inserted ' + result.totalSaved + ' objects',
          });
        }

        else
          that.setState({
            foo: 'Error Inserting Data'
          });

      }).catch(function(ex) {
      that.setState({foo: 'qux error'});
    });
    if (event) {
      event.preventDefault();
    }
  };

  fetchAddress(event) {
    this.setState({foo:'gone Fetchin...'});
    const that = this;
    //const ip = '168.156.47.60'; //Charlie's Box
    //const ip = '10.11.3.104';   //BC EDUROAM Wireless
    const ip = '10.10.10.201';    //Jeff Home
    fetch('http://' + ip + ':30025/all-data')
      .then((response) => response.json())
      .then(function(result) {
        that.collection = result.allData;
        if (that.collection.length != 0)
          that.setState({
            foo: 'qux success',
            firstName: that.collection[that.index].firstName,
            lastName: that.collection[that.index].lastName
          });

        else
          that.setState({
            foo: 'DB is empty'
          });
      }).catch(function(ex) {
      that.setState({foo: 'qux error'});
    });
    if (event) {
      event.preventDefault();
    }
  };

  getPrevAddress(event) {
    // Only perform action of collection is not empty
    if (this.collection.length != 0) {

      // This logic provides wrapping
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
    }

    else {
      this.setState({
        foo: 'Prev Unavailable',
      });
    }
  };

  getNextAddress(event) {
    // Only perform action of collection is not empty
    if (this.collection.length != 0) {

      // This logic provides wrapping
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
    }

    else {
      this.setState({
        foo: 'Next Unavailable',
      });
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
          style={styles.appButtons}
          onPress={this.removeAddressData}
          title="Delete Data"
          color="rgb(255,210,50)"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style={styles.appButtons}
          onPress={this.insertAddressData}
          title="Insert Data"
          color="rgb(10,120,240)"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style={styles.appButtons}
          onPress={this.fetchAddress}
          title="Get Data"
          color="rgb(30,160,240)"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style={styles.appButtons}
          onPress={this.getPrevAddress}
          title="Get Prev"
          color="rgb(50,200,240)"
          accessibilityLabel="Learn more about this purple button"
        />

        <Button
          style={styles.appButtons}
          onPress={this.getNextAddress}
          title="Get Next"
          color="rgb(50,200,240)"
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
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da'
  },
  appButtons: {
    borderRadius: 15,
    marginBottom: 5
  }
});

AppRegistry.registerComponent('Address', () => Address);
