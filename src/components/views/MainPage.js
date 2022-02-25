import React, {Component} from 'react';
import TimeComponent from './TimeComponent';
import LoadingPage from './LoadingPage';

class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: <LoadingPage />,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        component: <TimeComponent />,
      });
    }, 3000);
  }

  render() {
    return this.state.component;
  }
}

export default MainPage;
