import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Card} from 'react-native-paper';

class TimeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(),
      date: new Date().toLocaleString().slice(4, 10),
      timer: null,
      minutesCounter: '00',
      secondsCounter: '00',
      startDisable: false,
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
    clearInterval(this.state.timer);
  }

  onButtonStart = () => {
    let timer = setInterval(() => {
      var num = (Number(this.state.secondsCounter) + 1).toString(),
        count = this.state.minutesCounter;

      if (Number(this.state.secondsCounter) == 59) {
        count = (Number(this.state.minutesCounter) + 1).toString();
        num = '00';
      }

      this.setState({
        minutesCounter: count.length == 1 ? '0' + count : count,
        secondsCounter: num.length == 1 ? '0' + num : num,
      });
    }, 1000);
    this.setState({timer});

    this.setState({startDisable: true});
  };

  onButtonStop = () => {
    clearInterval(this.state.timer);
    this.setState({startDisable: false});
  };

  onButtonClear = () => {
    this.setState({
      timer: null,
      minutesCounter: '00',
      secondsCounter: '00',
    });
  };
  getWeekDay = Day => {
    return [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ][Day];
  };

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
          ('0' + (hours % 12)).slice(-2) + ':' + ('0' + mins).slice(-2) + ' PM';
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
        <Card style={styles.card}>
          <Card.Title title="Date & Time" titleStyle={styles.titleText} />
          <View style={styles.flex}>
            <Text style={styles.text}>
              Date: {this.state.date.slice(4, 6)} {this.state.date.slice(0, 3)}{' '}
              {year}
            </Text>
            <Text style={styles.text}>
              Day: {this.getWeekDay(this.state.time.getDay())}
            </Text>
            <Text style={styles.text}>
              Time: {this.convertTimeFormat(this.state.time)}
            </Text>
          </View>
        </Card>
        <Card style={styles.card}>
          <Card.Title title="Stopwatch" titleStyle={styles.titleText} />
          <View style={styles.flex}>
            <Text style={styles.text}>
              {this.state.minutesCounter} : {this.state.secondsCounter}
            </Text>
            {!this.state.startDisable && (
              <TouchableOpacity
                onPress={this.onButtonStart}
                activeOpacity={0.6}
                style={styles.button}
                disabled={this.state.startDisable}>
                <Text style={styles.buttonText}>START</Text>
              </TouchableOpacity>
            )}
            {this.state.startDisable && (
              <TouchableOpacity
                onPress={this.onButtonStop}
                activeOpacity={0.6}
                style={styles.button}
                disabled={!this.state.startDisable}>
                <Text style={styles.buttonText}>PAUSE</Text>
              </TouchableOpacity>
            )}
            {!this.state.startDisable && (
              <TouchableOpacity
                onPress={this.onButtonClear}
                activeOpacity={0.6}
                style={styles.button}
                disabled={this.state.startDisable}>
                <Text style={styles.buttonText}>STOP</Text>
              </TouchableOpacity>
            )}
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'white',
  },
  flex: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: '#d8d8d8',
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
  },
  titleText: {
    textAlign: 'center',
    color: 'black',
    fontSize: 26,
  },
  button: {
    width: '50%',
    padding: 7,
    borderRadius: 7,
    marginTop: 10,
    length: 'auto',
    backgroundColor: '#FF6F00',
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
  counterText: {
    fontSize: 20,
    color: '#000',
  },
});

export default TimeComponent;
