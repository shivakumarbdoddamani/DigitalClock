import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const options = {
  hour: 'numeric',
  minute: 'numeric',
  hour12: true,
};
class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      date: new Date().toLocaleString().slice(4, 10),
    };
  }
  componentDidMount() {
    this.interval = setInterval(
      () =>
        this.setState({
          time: new Date(),
        }),
      1000,
    );
  }

  componentDidUpdate() {
    const {date} = this.state;
    const currentDate = new Date().toLocaleString().slice(4, 10);
    if (currentDate !== date) {
      this.setState({date: currentDate});
    }
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  convertTimeFormat = dateObj => {
    const hours = dateObj.getHours();
    const mins = dateObj.getMinutes();
    let timeString = '';
    if (hours >= 12) {
      if (hours % 12 === 0) {
        timeString =
          ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ' PM';
      } else {
        timeString =
          ('0' + (hours % 12)).slice(-2) +
          ':' +
          ('0' + mins).slice(-2) +
          ' PM';
      }
    } else {
      if (hours === 0) {
        timeString = '12' + ':' + ('0' + mins).slice(-2) + ' AM';
      } else {
        timeString =
          ('0' + hours).slice(-2) + ':' + ('0' + mins).slice(-2) + ' AM';
      }
    }
    return timeString;
  };
  render() {
    const year = new Date().getFullYear();
    return (
      <View style={styles.container}>
        <Text style={styles.txt}>Today's Date: {this.state.date.slice(4,6)} {this.state.date.slice(0,3)} {year}</Text>
        <Text style={styles.txt}>Time: {this.convertTimeFormat(this.state.time)}</Text>
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
  txt: {
    alignItems: 'center',
    color: 'black',
    fontSize: 24
  },
});

export default TimeComponent;
