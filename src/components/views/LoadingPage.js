import React, {Component} from 'react';
import {StyleSheet, ActivityIndicator, Image, View} from 'react-native';

class LoadingPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const logo = require('../assets/img/ic_launcher_round.png');
    return (
      <View style={styles.container}>
        <Image style={styles.logo} source={logo} />
        <ActivityIndicator size="large" />
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
