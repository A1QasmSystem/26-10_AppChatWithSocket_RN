import React, {Component} from 'react';
import {Text, TextInput, TouchableOpacity, View, Image} from 'react-native';
import styles from './styleLogin';
import fb from '../assets/fb.png';
import google from '../assets/google.png';
import eyeClose from '../assets/eyeClosed.png';
import eyeOpen from '../assets/eyeOpened.png';

export class Login extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
      email: '',
      pass: '',
      dataEmail: 'fmradiant@gmail.com',
      dataPass: '123',
    };
  }

  masuk = () => {
    if (
      this.state.email == this.state.dataEmail &&
      this.state.pass == this.state.dataPass
    ) {
      this.props.navigation.replace('Home');
    } else {
      alert('Data salah!');
    }
  };

  lihat = () => {
    this.setState({status: !this.state.status});
  };

  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <Text style={styles.mainText}> Welcome Back! </Text>
          <Text style={styles.emailText}>Email</Text>
          <TouchableOpacity>
            <View style={styles.viewInput}>
              <View style={styles.subViewInput}>
                <TextInput
                  placeholder="youremail@example.com"
                  onChangeText={(kata) => this.setState({email: kata})}
                />
              </View>
            </View>
          </TouchableOpacity>
          <Text style={styles.passText}>Password</Text>
          <TouchableOpacity>
            <View style={styles.viewInput}>
              <View style={styles.subViewInput}>
                <TextInput
                  secureTextEntry={true}
                  placeholder="Your_Password"
                  onChangeText={(kata) => this.setState({pass: kata})}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Log in</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('ResetPassword')}>
            <Text style={styles.subText}>Forgot Password?</Text>
          </TouchableOpacity>
          <Text style={styles.subText2}>Log in with social account</Text>
          <View style={styles.viewSocial}>
            <View>
              <TouchableOpacity>
                <View style={styles.fbLogin}>
                  <Image source={fb} style={styles.fb} />
                  <Text style={styles.loginText}>Facebook</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity>
                <View style={styles.googleLogin}>
                  <Image source={google} style={styles.google} />
                  <Text style={styles.loginText}>Google</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.subView2}>
            <Text style={styles.subText3}>Don't have any account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Register')}>
              <Text style={styles.subText4}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
