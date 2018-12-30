import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  Sitting1,
  Sitting2,
  Sitting3,
  Sitting4,
  Sitting5,
  Sitting6,
  Sitting7,
  Sitting8,
  Standing2
} from 'react-native-humaaans';

export default class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React-native Humaaans !</Text>
        <Sitting5
          hairColor="#000000"
          skinColor="#ede0d4"
          shoeColor="#0000EE"
          pantColor="#FF44EA"
          shirtColor="#FFAB11"
          coatColor="#FF0E11"
          objectColor="#FFA011"
          wheelchairColor="#FF0000"
          hatColor="#EEAABB"
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
