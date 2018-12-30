import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {
  Sitting1,
  Sitting2,
  Sitting3,
  Sitting4,
  Sitting5,
  Sitting6,
  Sitting7,
  Sitting8,
  Standing1,
  Standing2,
  Standing3,
  Standing4,
  Standing5,
  Standing6,
  Standing7,
  Standing8
} from 'humaaans-native';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1
    };
    this.changeHuman = this.changeHuman.bind(this);
  }

  changeHuman() {
    this.setState({
      count: (this.state.count + 1) % 15
    });
  }

  render() {
    const { count } = this.state;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React-native Humaaans !</Text>
        <TouchableOpacity onPress={this.changeHuman}>
          {count === 0 && (
            <Sitting1
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
          )}
          {count === 1 && (
            <Sitting2
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
          )}
          {count === 2 && (
            <Sitting3
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
          )}
          {count === 3 && (
            <Sitting4
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
          )}
          {count === 4 && (
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
          )}
          {count === 5 && (
            <Sitting6
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
          )}
          {count === 6 && (
            <Sitting7
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
          )}
          {count === 7 && (
            <Sitting8
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
          )}
          {count === 8 && (
            <Standing1
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
          )}
          {count === 9 && (
            <Standing2
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
          )}
          {count === 10 && (
            <Standing3
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
          )}
          {count === 11 && (
            <Standing4
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
          )}
          {count === 12 && (
            <Standing5
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
          )}
          {count === 13 && (
            <Standing6
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
          )}
          {count === 14 && (
            <Standing7
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
          )}
          {count === 15 && (
            <Standing8
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
          )}
        </TouchableOpacity>
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
