import React, {Component} from 'react';
import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import intro from '../assets/intro.png';
import styles from './styleIntro';

export default class Intro extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <Image source={intro} />
        <Text style={styles.mainText}> Mari List Target Antum </Text>
        <Text style={styles.subText}>
          Merapikan Target Antum dengan Aplikasi Muslim List
        </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Login')}>
          <View style={styles.viewButton}>
            <Text style={styles.textButton}>Get Started</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
