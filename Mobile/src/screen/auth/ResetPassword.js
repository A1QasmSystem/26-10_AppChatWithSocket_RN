import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput, Image} from 'react-native';
import styles from './styleResetPassword';
import back from '../assets/back.png';

export class ResetPassword extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image source={back} style={styles.backImg} />
          </TouchableOpacity>
          <Text style={styles.mainText}> Reset Password </Text>
          <Text style={styles.subText}>
            Please enter your email below to receive your password reset
            instruction.
          </Text>
          <Text style={styles.emailText}>Email</Text>
          <TouchableOpacity>
            <View style={styles.viewInput}>
              <TextInput placeholder="youremail@example.com" />
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              alert(
                'Email sent! Please check your inbox and do not forget to check spam.',
              )
            }>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Send Email</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default ResetPassword;
