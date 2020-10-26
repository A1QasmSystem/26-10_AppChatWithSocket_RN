import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import LinearGradient from 'react-native-linear-gradient';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.navigate('Dashboard');
      } else {
        this.props.navigation.navigate('Register');
      }
    });
  }

  mengambilUser = () => {
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo/', {
      method: 'GET',
      Authorization:
        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0ZnVsLWFwaS1sYXJhdmVsLTcuaGVyb2t1YXBwLmNvbVwvYXBpXC9sb2dpbiIsImlhdCI6MTYwMzExODA4MCwiZXhwIjoxNjAzMTIxNjgwLCJuYmYiOjE2MDMxMTgwODAsImp0aSI6IkJHa0h2VVBjMkVtTGN0c0ciLCJzdWIiOjYyLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0._wV5BFw4xCbMEgKmAboWvhY54m_Mhh0ROcjVzJRfZIo',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  componentDidMount() {
    this.mengambilUser();
  }

  Login = () => {
    const {email, password} = this.state;

    var dataToSend = {email: email, password: password, mobile: true};
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/login', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('Dashboard');
        } else {
          alert('Pastikan Email dan Password BENAR!');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Email dan Password BENAR!');
      });
  };

  render() {
    return (
      <LinearGradient
        style={styles.container}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}
        locations={[0, 0.0, 0.6]}
        colors={['#B82C7C', '#854BA4']}>
        <TouchableOpacity
          onPress={() => {
            alert('Ganti bahasa');
          }}>
          <Text style={styles.language}>
            {' '}
            Language: English (United States) v
          </Text>
        </TouchableOpacity>
        <Text style={styles.insta}> Instagram</Text>
        <Image
          style={styles.bgImage}
          source={{uri: 'https://lorempixel.com/900/1400/nightlife/2/'}}
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={(email) => this.setState({email})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/email.png'}}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={(password) => this.setState({password})}
          />
          <Image
            style={styles.inputIcon}
            source={{uri: 'https://img.icons8.com/nolan/40/000000/key.png'}}
          />
        </View>

        <TouchableOpacity
          style={[styles.buttonContainer, styles.loginButton]}
          onPress={() => this.Login()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.btnForgotPassword}
          onPress={() => this.props.navigation.navigate('ResetPassword')}>
          <Text style={styles.btnText}>Forgot your password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => this.props.navigation.navigate('Register')}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </LinearGradient>
    );
  }
}

const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87cefa',
  },
  language: {
    marginBottom: 30,
    marginTop: 15,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
  insta: {
    marginBottom: 30,
    marginTop: 10,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 300,
    borderRadius: 30,
    backgroundColor: 'transparent',
  },
  btnForgotPassword: {
    // height: 15,
    // flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    // marginBottom: 10,
    // width: 300,
    // backgroundColor: 'transparent',
    marginTop: 5,
    color: '#20232a',
    textAlign: 'center',
    fontSize: 14,
    // fontWeight: 'bold',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  loginButton: {
    backgroundColor: '#00b5ec',
    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9,
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19,
  },
  loginText: {
    color: 'white',
  },
  bgImage: {
    flex: 1,
    resizeMode,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
