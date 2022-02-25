import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Image, View, Text} from 'react-native';

class LoadingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const logo = require('../assets/img/ic_launcher_round.png');
    return (
      <View style={styles.container}>
        <View style={styles.flex}>
          <Image style={styles.logo} source={logo} />
        </View>
        <View style={styles.flex}>
          <Text style={styles.txt}>Welcome to Digital Clock</Text>
        </View>
        <View style={styles.flex}>
          <ActivityIndicator size="large" />
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
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
  },
  logo: {
    width: 200,
    height: 200,
  },
  txt: {
    color: '#000000',
    fontSize: 20,
  },
});

export default LoadingPage;
