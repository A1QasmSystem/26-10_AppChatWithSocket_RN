import React, {Component} from 'react';
import {
  // StyleSheet,
  Text,
  View,
  // TextInput,
  // Button,
  // TouchableOpacity,
  // Image,
  ActivityIndicator,
  // Alert,
} from 'react-native';
import Login from './login';
import AsyncStorage from '@react-native-community/async-storage';

export default class Splashscreen extends Component {
  constructor() {
    super();
    this.state = {
      status: true,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({status: false});
    }, 5000);
    const value = AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.navigate('Dashboard');
      } else {
        this.props.navigation.navigate('Register');
      }
    });
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
          {/* <Image
            source={list}
            style={{width: 180, height: 180, alignSelf: 'center'}}
          /> */}
          <Text style={{textAlign: 'center', color: 'white', marginBottom: 50}}>
            Muslim List
          </Text>
          <ActivityIndicator size="large" color="#00eb00" />
        </View>
      );
    } else {
      return <Login />;
    }
  }
}
// constructor(props) {
//   super(props);
//   this.state = {
//     email: '',
//     password: '',
//     splashscreen: true,
//   };
// }

// onClickListener = (viewId) => {
//   Alert.alert('Alert', 'Button pressed ' + viewId);
// };

// componentDidMount() {
//   setTimeout(() => {
//     this.setState({
//       splashscreen: true,
//     });
//   }, 5000);
// }

// render() {
//   if (this.state.splashscreen) {
//     return (
//       <View style={styles.container}>
//         <ActivityIndicator size="large" color="#00b5ec" />
//       </View>
//     );
//   } else {
//     <Login />;
//   }
// }
// }

// const resizeMode = 'center';

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#DCDCDC',
//   },
//   inputContainer: {
//     borderBottomColor: '#F5FCFF',
//     backgroundColor: '#FFFFFF',
//     borderRadius: 30,
//     borderBottomWidth: 1,
//     width: 300,
//     height: 45,
//     marginBottom: 20,
//     flexDirection: 'row',
//     alignItems: 'center',

//     shadowColor: '#808080',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,

//     elevation: 5,
//   },
//   inputs: {
//     height: 45,
//     marginLeft: 16,
//     borderBottomColor: '#FFFFFF',
//     flex: 1,
//   },
//   inputIcon: {
//     width: 30,
//     height: 30,
//     marginRight: 15,
//     justifyContent: 'center',
//   },
//   buttonContainer: {
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 20,
//     width: 300,
//     borderRadius: 30,
//     backgroundColor: 'transparent',
//   },
//   btnForgotPassword: {
//     height: 15,
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     alignItems: 'flex-end',
//     marginBottom: 10,
//     width: 300,
//     backgroundColor: 'transparent',
//   },
//   loginButton: {
//     backgroundColor: '#00b5ec',

//     shadowColor: '#808080',
//     shadowOffset: {
//       width: 0,
//       height: 9,
//     },
//     shadowOpacity: 0.5,
//     shadowRadius: 12.35,

//     elevation: 19,
//   },
//   loginText: {
//     color: 'white',
//   },
//   bgImage: {
//     flex: 1,
//     resizeMode,
//     position: 'absolute',
//     width: '100%',
//     height: '100%',
//     justifyContent: 'center',
//   },
//   btnText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });
