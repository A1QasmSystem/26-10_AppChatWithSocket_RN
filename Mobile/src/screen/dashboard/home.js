import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
// import LinearGradient from 'react-native-linear-gradient';
// import LinearGradient from 'react-native-linear-gradient';
import Day from './ui-ux-dashboard/day';
import Card from './ui-ux-dashboard/card';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  logout = () => {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  };

  state = {
    color: '#136DF3',
    activestate: 'rgba(255, 255, 255, 0.291821)',
  };
  change = () => {
    return this.props.navigation.navigate('Profile');
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.logout()} style={styles.view13}>
          <Text style={styles.text12}>Sign Out</Text>
        </TouchableOpacity>
        <View style={styles.containerone}>
          <View style={styles.boxone}></View>
          <View style={styles.boxtwo}>
            <Text style={styles.name}>Hi, Yahya</Text>
            <Text style={styles.subtitle}>Ahlan wa Sahlan yaa Akhi</Text>
          </View>
          <View style={styles.boxthree}>
            <ImageBackground
              source={require('../assets/graphone.png')}
              style={{width: 360, height: '100%'}}
            />
          </View>
          <View style={styles.boxfour}>
            <Day dayname="Sun" />
            <Day dayname="Mon" />
            <Day dayname="Tue" />
            <Day dayname="Wed" />
            <Day dayname="Thu" active={this.state.activestate} />
            <Day dayname="Fri" />
            <Day dayname="Sat" />
          </View>
        </View>
        <View style={styles.containertwo}>
          <View style={styles.line}></View>
          <View style={styles.progress}>
            <Text style={styles.textone}>My Progress</Text>
          </View>
          <View style={styles.cards}>
            <Card
              move="bounceInLeft"
              image={require('../assets/checkbox.png')}
              title="Profile"
              subtitle="85% Completed"
              completed="85%"
              screenchange={() => this.change()}
            />

            <Card
              move="bounceInRight"
              image={require('../assets/checktodo.png')}
              title="Completed"
              subtitle="5 out of 10 tasks"
              completed="75%"
            />
          </View>
        </View>
      </View>
      // =========================================
      // <View style={styles.container}>
      //   <View style={styles.subViewProfile}>
      //     <View style={styles.subViewProfileText}>
      //       <Text style={styles.textProfile}>Hi Yahya,</Text>
      //       <Text style={styles.subTextProfile}>How're you today?</Text>
      //     </View>
      //   </View>
      //   <View style={styles.viewSearch}>
      //     <View style={styles.subViewSearch}>
      //       <TextInput placeholder="Search your target..." />
      //     </View>
      //   </View>
      //   <Text style={styles.textTarget}>Your target</Text>
      //   <View style={styles.viewList}>
      //     <View style={styles.subViewList}>
      //       <Text>Membuat Aplikasi Muslim List</Text>
      //       <View style={styles.subViewImg}>
      //         <TouchableOpacity></TouchableOpacity>
      //         <TouchableOpacity></TouchableOpacity>
      //       </View>
      //     </View>
      //   </View>
      //   <Text onPress={() => this.logout()}>Home</Text>
      // </View>
    );
  }
}

// const resizeMode = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#136DF3',
  },
  view13: {
    backgroundColor: 'dodgerblue',
    height: 35,
    width: 80,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    opacity: 0.8,
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: 10,
  },
  containerone: {
    flex: 1,
    display: 'flex',
  },
  containertwo: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopRightRadius: 60,
    borderTopLeftRadius: 60,
  },
  boxone: {
    flex: 1,
  },
  boxtwo: {
    flex: 0.8,
    marginHorizontal: 35,
  },
  boxthree: {
    flex: 2.5,
  },
  boxfour: {
    flex: 0.5,
    color: '#fff',
    flexDirection: 'row',
  },
  name: {
    fontSize: 38,
    color: '#fff',
    fontWeight: 'bold',
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 20,
    color: '#fff',
  },
  line: {
    width: 66,
    height: 4,
    backgroundColor: '#F4F0F0',
    borderRadius: 2,
    marginVertical: 25,
    left: 150,
  },
  progress: {
    left: 50,
  },
  textone: {
    fontSize: 20,
    color: '#2D2D2D',
    letterSpacing: -0.5,
  },
  cards: {
    flex: 1,
    display: 'flex',
    marginTop: 10,
    marginHorizontal: 30,
  },
});
// =========================
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
//   subViewProfile: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   subViewProfileText: {
//     marginLeft: 20,
//   },
//   textProfile: {
//     fontWeight: 'bold',
//     fontSize: 20,
//   },
//   subTextProfile: {
//     color: 'grey',
//   },
//   viewSearch: {
//     backgroundColor: 'white',
//     borderRadius: 10,
//     marginTop: '15%',
//   },
//   subViewSearch: {
//     flexDirection: 'row',
//     marginHorizontal: 10,
//     alignItems: 'center',
//   },
//   imgSearch: {
//     width: 20,
//     height: 20,
//     marginRight: 10,
//   },
//   textTarget: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     marginTop: 20,
//     marginBottom: 10,
//   },
//   viewList: {
//     height: 45,
//     backgroundColor: 'white',
//     borderRadius: 10,
//     justifyContent: 'center',
//     marginVertical: 5,
//   },
//   subViewList: {
//     marginHorizontal: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   imgPencil: {
//     width: 25,
//     height: 25,
//     marginRight: '2%',
//   },
//   subViewImg: {
//     flexDirection: 'row',
//     justifyContent: 'flex-end',
//     flex: 1,
//   },
// });
