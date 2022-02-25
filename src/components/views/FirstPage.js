import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text, View} from 'react-native';

class FirstPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={this.onPress}>
          <Text style={styles.buttonText}>Click me</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text}>You clicked {this.state.count} times</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#8B008B',
    color: 'black',
    padding: 10,
    marginBottom: 10,
  },
  text: {
    color: 'black',
  },
  buttonText: {
    color: 'white',
  },
});

export default FirstPage;
