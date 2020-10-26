import React, {Component} from 'react';
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import io from 'socket.io-client';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import {TextInput} from 'react-native-paper';

export class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }

  componentDidMount() {
    this.socket = io('http://192.168.1.28:3000');

    // ===>> buat ip HP
    // this.socket = io('http://192.168.43.185:3000');
    this.socket.on('chat message', (msg) => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }

  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }

  render() {
    const chatMessages = this.state.chatMessages.map((chatMessage) => (
      <Text
        style={{
          // marginTop: 50,
          backgroundColor: 'white',
          alignSelf: 'flex-start',
          borderRadius: 10,
          marginLeft: 10,
          fontSize: 20,
        }}
        key={chatMessage}>
        {chatMessage}
      </Text>
    ));

    return (
      <View style={styles.container}>
        <ImageBackground
          source={require('../assets/background.jpg')}
          style={{width: 360, height: '100%'}}>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                alignItems: 'flex-start',
                backgroundColor: 'green',
                flex: 1,
                flexDirection: 'row',
              }}>
              <Image
                style={styles.inputIcon}
                source={require('../assets/avatar.png')}
              />
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                  alignItems: 'flex-start',
                  marginLeft: 10,
                }}>
                WhatsApp
              </Text>
            </View>
            <View style={{alignItems: 'flex-end', backgroundColor: 'green'}}>
              <Image
                style={styles.inputIconTop}
                source={require('../assets/menu.png')}
              />
              {/* <Icon name="call" color="#fff" size={23} style={{padding: 5}} />
              <Icon
                name="more-vert"
                color="#fff"
                size={23}
                style={{padding: 5}}
              /> */}
            </View>
          </View>
          <View style={{flex: 1}}>{chatMessages}</View>
          <View style={{flexDirection: 'row'}}>
            <TextInput
              style={{
                height: 40,
                borderWidth: 2,
                borderRadius: 20,
                flex: 1,
                backgroundColor: 'white',
              }}
              autoCorrect={false}
              value={this.state.chatMessage}
              onSubmitEditing={() => this.submitChatMessage()}
              onChangeText={(chatMessage) => {
                this.setState({chatMessage});
              }}
            />
            <TouchableOpacity onPress={() => this.submitChatMessage()}>
              <Image
                style={styles.inputIcon}
                source={require('../assets/send.png')}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fcff',
    // flex: 1,
  },
  eachOption: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#d7d7d7',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  inputIconTop: {
    width: 30,
    tintColor: 'white',
    height: 40,
    marginRight: 15,
    justifyContent: 'center',
  },
  inputIcon: {
    width: 30,
    height: 40,
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
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: "333333"
  // }
});

export default Chat;

// ====================================================
// ====================================================
// ====================================================
// ====================================================
// import React, {Component} from 'react';
// import {
//   Text,
//   View,
//   TextInput,
//   TouchableOpacity,
//   ScrollView,
// } from 'react-native';

// export class todos extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: ['Mobile', 'Android', 'Developer'],
//       text: '',
//       checklist: false,
//     };
//   }

//   addTodo = () => {
//     const {text, todos} = this.state;

//     this.setState({
//       todos: [text, ...todos],
//     });
//   };

//   removeTodo = (index) => {
//     const {todos} = this.state;
//     this.setState({
//       todos: todos.filter((todo, i) => i !== index),
//     });
//   };

//   checklist = () => {
//     this.setState({
//       checklist: !this.state.checklist,
//     });
//   };

//   render() {
//     return (
//       <View style={{flex: 1}}>
//         <View
//           style={{
//             height: 40,
//             color: 'white',
//             backgroundColor: 'dodgerblue',
//             alignItems: 'center',
//             justifyContent: 'center',
//             borderBottomRightRadius: 60,
//             borderBottomLeftRadius: 60,
//           }}>
//           <Text style={{color: 'yellow', fontSize: 20}}> Array Todo </Text>
//         </View>
//         <View
//           style={{
//             flexDirection: 'row',
//             height: 50,
//             alignItems: 'center',
//             backgroundColor: '#784',
//             margin: 10,
//             borderRadius: 10,
//             justifyContent: 'space-between',
//           }}>
//           <TextInput
//             placeholder="Masukan Catatan Anda"
//             onChangeText={(inputan) => this.setState({text: inputan})}
//           />
//           <TouchableOpacity onPress={() => this.addTodo()}>
//             <Text style={{marginRight: 10}}>Add</Text>
//           </TouchableOpacity>
//         </View>
//         <ScrollView>
//           {this.state.todos.map((value, index) => {
//             return (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   justifyContent: 'space-around',
//                   backgroundColor: '#927',
//                   height: 50,
//                   alignItems: 'center',
//                   margin: 24,
//                   borderRadius: 15,
//                 }}>
//                 <Text style={{color: '#fff', fontSize: 15}}>Edit</Text>
//                 <Text style={{color: '#fff', fontSize: 15}}>
//                   {index + 1}
//                   {value}
//                 </Text>
//                 <TouchableOpacity onPress={() => this.removeTodo(index)}>
//                   <Text style={{color: '#fff', fontSize: 15}}>Hapus</Text>
//                 </TouchableOpacity>
//                 <TouchableOpacity onPress={() => this.checklist()}>
//                   <Text style={{color: '#fff', fontSize: 15}}>
//                     {this.state.checklist
//                       ? 'Sudah Checklist'
//                       : 'Belum Checklit'}
//                   </Text>
//                 </TouchableOpacity>
//               </View>
//             );
//           })}
//         </ScrollView>
//       </View>
//     );
//   }
// }

// export default todos;

// // =============================
// // import React, {Component} from 'react';
// // import {
// //   StyleSheet,
// //   Text,
// //   View,
// //   TextInput,
// //   Button,
// //   TouchableOpacity,
// //   Image,
// //   Alert,
// // } from 'react-native';

// // export default class Login extends Component {
// //   constructor(props) {
// //     super(props);
// //     this.state = {
// //       email: '',
// //       password: '',
// //     };
// //   }

// //   onClickListener = (viewId) => {
// //     Alert.alert('Alert', 'Button pressed ' + viewId);
// //   };

// //   render() {
// //     return (
// //       <View style={styles.container}>
// //         <Text>Todo2</Text>
// //       </View>
// //     );
// //   }
// // }

// // const resizeMode = 'center';

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     backgroundColor: '#DCDCDC',
// //   },
// //   inputContainer: {
// //     borderBottomColor: '#F5FCFF',
// //     backgroundColor: '#FFFFFF',
// //     borderRadius: 30,
// //     borderBottomWidth: 1,
// //     width: 300,
// //     height: 45,
// //     marginBottom: 20,
// //     flexDirection: 'row',
// //     alignItems: 'center',

// //     shadowColor: '#808080',
// //     shadowOffset: {
// //       width: 0,
// //       height: 2,
// //     },
// //     shadowOpacity: 0.25,
// //     shadowRadius: 3.84,

// //     elevation: 5,
// //   },
// //   inputs: {
// //     height: 45,
// //     marginLeft: 16,
// //     borderBottomColor: '#FFFFFF',
// //     flex: 1,
// //   },
// //   inputIcon: {
// //     width: 30,
// //     height: 30,
// //     marginRight: 15,
// //     justifyContent: 'center',
// //   },
// //   buttonContainer: {
// //     height: 45,
// //     flexDirection: 'row',
// //     justifyContent: 'center',
// //     alignItems: 'center',
// //     marginBottom: 20,
// //     width: 300,
// //     borderRadius: 30,
// //     backgroundColor: 'transparent',
// //   },
// //   btnForgotPassword: {
// //     height: 15,
// //     flexDirection: 'row',
// //     justifyContent: 'flex-end',
// //     alignItems: 'flex-end',
// //     marginBottom: 10,
// //     width: 300,
// //     backgroundColor: 'transparent',
// //   },
// //   loginButton: {
// //     backgroundColor: '#00b5ec',

// //     shadowColor: '#808080',
// //     shadowOffset: {
// //       width: 0,
// //       height: 9,
// //     },
// //     shadowOpacity: 0.5,
// //     shadowRadius: 12.35,

// //     elevation: 19,
// //   },
// //   loginText: {
// //     color: 'white',
// //   },
// //   bgImage: {
// //     flex: 1,
// //     resizeMode,
// //     position: 'absolute',
// //     width: '100%',
// //     height: '100%',
// //     justifyContent: 'center',
// //   },
// //   btnText: {
// //     color: 'white',
// //     fontWeight: 'bold',
// //   },
// // });
