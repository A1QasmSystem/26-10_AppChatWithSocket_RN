import React, {Component} from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Image,
  Picker,
} from 'react-native';
import styles from './styleRegister';
import fb from '../assets/fb.png';
import google from '../assets/google.png';
import flag from '../assets/indoflag.png';
import eyeOpened from '../assets/eyeOpened.png';
import back from '../assets/back.png';

export class Register extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <View style={styles.subView}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}>
            <Image source={back} style={styles.backImg} />
          </TouchableOpacity>
          <Text style={styles.mainText}>Registration</Text>
          <View style={styles.subView2}>
            <Text style={styles.subText}>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.subText2}>Sign In</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.emailText}>Email</Text>
          <View style={styles.viewInput}>
            <View style={styles.subViewInput}>
              <TextInput placeholder="youremail@example.com" />
            </View>
          </View>
          <Text style={styles.mobileText}>Mobile Number</Text>
          <View style={styles.viewMobile}>
            <View style={styles.viewInput2}>
              <View style={styles.subViewInput5}>
                <Image source={flag} style={styles.flag} />
                <Text>+62</Text>
                <Picker />
              </View>
            </View>
            <View style={styles.viewInput3}>
              <View style={styles.subViewInput3}>
                <TextInput placeholder="Phone Number"></TextInput>
              </View>
            </View>
          </View>
          <Text style={styles.passText}>Password</Text>
          <View style={styles.viewInput}>
            <View style={styles.subViewInput4}>
              <View style={styles.subTextInput}>
                <TextInput placeholder="Your_Password" secureTextEntry={true} />
              </View>
              {/* <Image source={eyeOpened} style={styles.flag} /> */}
            </View>
          </View>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}>
            <View style={styles.loginView}>
              <Text style={styles.loginText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.subText3}>Log in with social account</Text>
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
          <View style={styles.subView3}>
            <Text style={styles.subText}>
              By clicking sign up you are agreeing to the
              <TouchableOpacity>
                <Text style={styles.subText2}>Term of use</Text>
              </TouchableOpacity>
              |
              <TouchableOpacity>
                <Text style={styles.subText2}>Privacy policy</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Register;
