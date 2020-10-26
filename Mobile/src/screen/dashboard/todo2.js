import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export class todos extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['Meja', 'Kursi', 'Laptop'],
      text: '',
      checklist: false,
    };
  }

  addTodo = () => {
    const {text, todos} = this.state;

    this.setState({
      todos: [text, ...todos],
    });
  };

  removeTodo = (index) => {
    this.setState({
      todos: this.state.todos.filter((todo, id) => id !== index),
    });
  };

  checklist = () => {
    this.setState({
      checklist: !this.state.checklist,
    });
  };

  componentDidUpdate() {
    AsyncStorage.setItem('DataTodos', JSON.stringify(this.state.todos));
  }

  componentDidMount() {
    this.getData();
  }

  async getData() {
    const data = await AsyncStorage.getItem('DataTodos');
    if (data !== null) {
      const json = JSON.parse(data);
      this.setState({todos: json});
      console.log(json);
    }
  }

  render() {
    const [Meja, Kursi, Laptop] = this.state.todos;
    const {nama, asal} = this.state;
    return (
      <View style={{flex: 1}}>
        <View
          style={{
            height: 40,
            backgroundColor: 'orange',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottomRightRadius: 60,
            borderBottomLeftRadius: 60,
          }}>
          <Text style={{color: 'blue', fontSize: 20}}> Asyn Storage Todo </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            backgroundColor: '#784',
            margin: 10,
            borderRadius: 10,
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder="Masukan Catatan Anda"
            onChangeText={(inputan) => this.setState({text: inputan})}
          />
          <TouchableOpacity onPress={() => this.addTodo()}>
            <Text style={{marginRight: 10}}>Add</Text>
          </TouchableOpacity>
        </View>
        {/* <Text>
          {Meja} {Kursi} {Laptop}{' '}
        </Text>
        <Text>
          {nama} {asal}
        </Text> */}
        <ScrollView>
          {/* {this.state.todos.map((element, index) => (
            <View style={{height: 50, backgroundColor: '#678', margin: 10}}>
              <Text>
                {index + 1} {element}
              </Text>
            </View>
          ))} */}

          {this.state.todos.map((value, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  backgroundColor: '#927',
                  height: 50,
                  alignItems: 'center',
                  margin: 24,
                  borderRadius: 15,
                }}>
                <Text style={{color: '#fff', fontSize: 15}}>Edit</Text>
                <Text style={{color: '#fff', fontSize: 15}}>{value}</Text>
                <TouchableOpacity
                  onPress={() =>
                    this.setState({
                      todos: this.state.todos.filter(
                        (value, id) => id !== index,
                      ),
                    })
                  }>
                  <Text style={{color: '#fff', fontSize: 15}}>Hapus</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.checklist()}>
                  <Text style={{color: '#fff', fontSize: 15}}>
                    {this.state.checklist
                      ? 'Sudah Checklist'
                      : 'Belum Checklit'}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

export default todos;

// =======================
// import React, {Component} from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   Image,
//   Alert,
// } from 'react-native';

// export default class Login extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//       password: '',
//     };
//   }

//   onClickListener = (viewId) => {
//     Alert.alert('Alert', 'Button pressed ' + viewId);
//   };

//   render() {
//     return (
//       <View style={styles.container}>
//         <Text>Todo1</Text>
//       </View>
//     );
//   }
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
