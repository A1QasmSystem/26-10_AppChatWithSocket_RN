// // import React from 'react';
// // import {View, StatusBar, Navigator} from 'react-native';

// // import Home from './src/screen/components/Home';
// // import ChatView from './src/screen/components/ChatView';
// // import ProfileView from './src/screen/components/ProfileView';
// // // import CallScreen from './src/screen/components/CallScreen';

// // console.disableYellowBox = true;

// // class Main extends React.Component {
// //   constructor(props) {
// //     super(props);
// //     this.renderScene = this.renderScene.bind(this);
// //   }

// //   renderScene(route, navigator) {
// //     switch (route.id) {
// //       case 'ChatView':
// //         return (
// //           <ChatView
// //             {...this.props}
// //             id="ChatView"
// //             navigator={navigator}
// //             name={route.name}
// //             image={route.image}
// //           />
// //         );
// //       case 'ProfileView':
// //         return (
// //           <ProfileView
// //             id="ProfileView"
// //             navigator={navigator}
// //             name={route.name}
// //             image={route.image}
// //             status={route.status}
// //           />
// //         );
// //       // case 'CallScreen':
// //       //   return (
// //       //     <CallScreen
// //       //       id="CallScreen"
// //       //       navigator={navigator}
// //       //       name={route.name}
// //       //       image={route.image}
// //       //     />
// //       //   );
// //       default:
// //         return <Home id="Home" navigator={navigator} />;
// //     }
// //   }

// //   render() {
// //     return (
// //       <View style={{flex: 1, backgroundColor: '#ece5dd'}}>
// //         <StatusBar hidden />
// //         <Navigator
// //           initialRoute={{id: 'Home'}}
// //           renderScene={this.renderScene}
// //           configureScene={(route, routeStack) => {
// //             if (route.id === 'CallScreen') {
// //               return Navigator.SceneConfigs.FloatFromBottomAndroid;
// //             }
// //             return Navigator.SceneConfigs.PushFromRight;
// //           }}
// //         />
// //       </View>
// //     );
// //   }
// // }

// // export default Main;

// // ------------------------------------------------------
import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Image, View} from 'react-native';

// import dashboard awal
import House from './src/screen/assets/home.png';
import orang from './src/screen/assets/orang.png';
import list from './src/screen/assets/list.png';

//Import screen auth
import Splashscreen from './src/screen/auth/splashscreen';
import Login from './src/screen/auth/login';
import Register from './src/screen/auth/register';
import ResetPassword from './src/screen/auth/ResetPassword';

// import screen dashboard
import Home from './src/screen/dashboard/home';
import Todo1 from './src/screen/dashboard/todo1';
// import Holder from './src/screen/dashboard/ui/holder';
import Todo3 from './src/screen/dashboard/todo3';
import Profile from './src/screen/dashboard/profile';
import Drawercontent from './src/screen/dashboard/drawercontent';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : 'grey';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: colorSelected}}
      />
    </View>
  );
};

const Dashboard = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={House} />,
        }}
      />
      <BottomTab.Screen
        name="Todo1"
        component={Todo1}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={list} />,
        }}
      />
      {/* <BottomTab.Screen
        name="Insta"
        component={Holder}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={list} />,
        }}
      /> */}
      <BottomTab.Screen
        name="Todo3"
        component={Todo3}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={list} />,
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={orang} />,
        }}
      />
    </BottomTab.Navigator>
  );
};

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={() => <Drawercontent />}>
      <Drawer.Screen name="Home" component={Dashboard} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
        <Stack.Screen
          name="Splashscreen"
          component={Splashscreen}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: true}}
        />
        <Stack.Screen
          name="ResetPassword"
          component={ResetPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={RootDrawer}
          options={{headerShown: true}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
