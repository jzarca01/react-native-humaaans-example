import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Standing2 } from 'react-native-humaaans';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React-native Humaaans !</Text>
        <Standing2
          height={200}
          hairColor="#000000"
          skinColor="#FDA7DC"
          shoeColor="#0000EE"
          pantColor="#FF44EA"
          sweaterColor="#FF0011"
        />
        <Text style={styles.instructions}>
          Don't forget to install react-native-svg too
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
});
