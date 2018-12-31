import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import tinycolor from 'tinycolor2';

import { elements } from './elements';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 1,
      colors: this.createRandomColors()
    };
    this.changeHuman = this.changeHuman.bind(this);
    this.createRandomColors = this.createRandomColors.bind(this);
    this.renderRandomHuman = this.renderRandomHuman.bind(this);
  }

  changeHuman() {
    this.setState({
      count: this.state.count + 1,
      colors: this.createRandomColors()
    });
  }

  renderRandomHuman() {
    const positionArray = [
      {
        name: 'Standing',
        modulo: 24
      },
      {
        name: 'Sitting',
        modulo: 8
      }
    ];
    const { count, colors } = this.state;
    return React.createElement(
      elements[
        `${positionArray[count % 2].name}${(count %
          positionArray[count % 2].modulo) +
          1}`
      ],
      {
        hairColor: colors[0],
        skinColor: colors[1],
        shoeColor: colors[2],
        pantColor: colors[3],
        shirtColor: colors[4],
        coatColor: colors[5],
        objectColor: colors[6],
        wheelchairColor: colors[7],
        hatColor: colors[8]
      }
    );
  }

  createRandomColors() {
    const randomColor = tinycolor.random();
    const colors = randomColor.monochromatic((results = 10));
    return colors.map(t => t.toHexString());
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Humaaans-Native Demo</Text>
        <TouchableOpacity onPress={this.changeHuman}>
          {this.renderRandomHuman()}
        </TouchableOpacity>
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
  }
});
