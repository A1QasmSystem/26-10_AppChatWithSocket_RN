import React, {Component} from 'react';
import {ActivityIndicator, Image, Text, View} from 'react-native';
import list from '../assets/list.png';
import Navigator from './Navigator';

export class SplashScreen extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
    }, 3000);
  }
  render() {
    if (this.state.status) {
      return (
        <View
          style={{
            justifyContent: 'center',
            flex: 1,
            backgroundColor: '#2F4F4F',
          }}>
          <Image
            source={list}
            style={{width: 180, height: 180, alignSelf: 'center'}}
          />
          <Text style={{textAlign: 'center', color: 'white', marginBottom: 50}}>
            Muslim List
          </Text>
          <ActivityIndicator size="large" color="#00eb00" />
        </View>
      );
    } else {
      return <Navigator />;
    }
  }
}

export default SplashScreen;
