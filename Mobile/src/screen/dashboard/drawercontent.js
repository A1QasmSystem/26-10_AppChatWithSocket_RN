// import React, {Component} from 'react';
// import {Text, View, StyleSheet} from 'react-native';
// // import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// export class Drawercontent extends Component {
//   render() {
//     return (
//       <View>
//         <Text> textInComponent </Text>
//       </View>
//     );
//   }
// }

// export default Drawercontent;
// ===================

import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import style from './style';
import AsyncStorage from '@react-native-community/async-storage';

class Drawercontent extends Component {
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
  render() {
    return (
      <View>
        <View style={style.view7}>
          <Image source={require('../assets/user.png')} style={style.image4} />
          <Text style={style.text9}>Muhammad Yahya Suhada</Text>
        </View>
        <View style={style.containertwo}>
          <TouchableOpacity style={{flexDirection: 'row'}}>
            <Text style={{marginLeft: 10}}>Follow: </Text>
            <Text style={style.text10}>@yahya.kun</Text>
          </TouchableOpacity>
        </View>
        <View style={{backgroundColor: 'white', height: 250, width: '100%'}}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Home')}
            style={style.view14}>
            <Image
              source={require('../assets/house.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{marginTop: 3}}>Inbox</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Profile')}
            style={style.view14}>
            <Image
              source={require('../assets/star.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{marginTop: 3}}>Starred</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.view14}>
            <Image
              source={require('../assets/send.png')}
              style={{height: 20, width: 20, marginLeft: 20}}
            />
            <Text style={{marginTop: 3, marginLeft: 10}}>Send Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.view14}>
            <Image
              source={require('../assets/draft01.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{marginTop: 3, marginRight: 15}}>Draft</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{backgroundColor: '#f1f1f13a', height: '100%', width: '100%'}}>
          <Text style={style.text13}>Sub Header</Text>
          <TouchableOpacity style={style.view14}>
            <Image
              source={require('../assets/email.png')}
              style={{height: 20, width: 20}}
            />
            <Text style={{marginTop: 3}}>All Email</Text>
          </TouchableOpacity>
          <TouchableOpacity style={style.view14}>
            <Image
              source={require('../assets/trash.png')}
              style={{height: 20, width: 20, borderRadius: 10}}
            />
            <Text style={{marginTop: 3, marginRight: 8}}>Spam</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logout()} style={style.view13}>
            <Text style={style.text12}>Sign Out</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Drawercontent;

// ===================
// /* eslint-disable react-native/sort-styles */
// /* eslint-disable import/order */
// import React from 'react';
// import {Image, StyleSheet} from 'react-native';
// import {createStackNavigator} from '@react-navigation/stack';
// import {
//   DrawerItem,
//   createDrawerNavigator,
//   DrawerContentScrollView,
// } from '@react-navigation/drawer';
// import Animated from 'react-native-reanimated';
// import {Feather, AntDesign} from 'react-native-vector-icons';
// import {Block, Button, Text} from 'expo-ui-kit';
// import {LinearGradient} from 'react-native';

// // screens
// import Dashboard from '../screens/Dashboard';
// import Messages from '../screens/Messages';
// import Contact from '../screens/Contact';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

// const Screens = ({navigation, style}) => {
//   return (
//     <Animated.View style={StyleSheet.flatten([styles.stack, style])}>
//       <Stack.Navigator
//         screenOptions={{
//           headerTransparent: true,
//           headerTitle: null,
//           headerLeft: () => (
//             <Button transparent onPress={() => navigation.openDrawer()}>
//               <Feather
//                 name="menu"
//                 size={18}
//                 color="black"
//                 style={{paddingHorizontal: 10}}
//               />
//             </Button>
//           ),
//         }}>
//         <Stack.Screen name="Home">
//           {(props) => <Dashboard {...props} />}
//         </Stack.Screen>
//         <Stack.Screen name="Messages">
//           {(props) => <Messages {...props} />}
//         </Stack.Screen>
//         <Stack.Screen name="Contact">
//           {(props) => <Contact {...props} />}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </Animated.View>
//   );
// };

// const DrawerContent = (props) => {
//   return (
//     <DrawerContentScrollView
//       {...props}
//       scrollEnabled={false}
//       contentContainerStyle={{flex: 1}}>
//       <Block>
//         <Block flex={0.4} margin={20} bottom>
//           <Image
//             source={{
//               uri:
//                 'https://react-ui-kit.com/assets/img/react-ui-kit-logo-green.png',
//               height: 60,
//               width: 60,
//               scale: 0.5,
//             }}
//             resizeMode="center"
//             style={styles.avatar}
//           />
//           <Text white title>
//             React UI Kit
//           </Text>
//           <Text white size={9}>
//             contact@react-ui-kit.com
//           </Text>
//         </Block>
//         <Block>
//           <DrawerItem
//             label="Dashboard"
//             labelStyle={styles.drawerLabel}
//             style={styles.drawerItem}
//             onPress={() => props.navigation.navigate('Home')}
//             icon={() => <AntDesign name="dashboard" color="white" size={16} />}
//           />
//           <DrawerItem
//             label="Messages"
//             labelStyle={{color: 'white', marginLeft: -16}}
//             style={{alignItems: 'flex-start', marginVertical: 0}}
//             onPress={() => props.navigation.navigate('Messages')}
//             icon={() => <AntDesign name="message1" color="white" size={16} />}
//           />
//           <DrawerItem
//             label="Contact us"
//             labelStyle={{color: 'white', marginLeft: -16}}
//             style={{alignItems: 'flex-start', marginVertical: 0}}
//             onPress={() => props.navigation.navigate('Contact')}
//             icon={() => <AntDesign name="phone" color="white" size={16} />}
//           />
//         </Block>
//       </Block>

//       <Block flex={false}>
//         <DrawerItem
//           label="Logout"
//           labelStyle={{color: 'white'}}
//           icon={() => <AntDesign name="logout" color="white" size={16} />}
//           onPress={() => alert('Are your sure to logout?')}
//         />
//       </Block>
//     </DrawerContentScrollView>
//   );
// };

// export default () => {
//   const [progress, setProgress] = React.useState(new Animated.Value(0));
//   const scale = Animated.interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [1, 0.8],
//   });
//   const borderRadius = Animated.interpolate(progress, {
//     inputRange: [0, 1],
//     outputRange: [0, 16],
//   });

//   const animatedStyle = {borderRadius, transform: [{scale}]};

//   return (
//     <LinearGradient style={{flex: 1}} colors={['#E94057', '#4A00E0']}>
//       <Drawer.Navigator
//         // hideStatusBar
//         drawerType="slide"
//         overlayColor="transparent"
//         drawerStyle={styles.drawerStyles}
//         contentContainerStyle={{flex: 1}}
//         drawerContentOptions={{
//           activeBackgroundColor: 'transparent',
//           activeTintColor: 'white',
//           inactiveTintColor: 'white',
//         }}
//         sceneContainerStyle={{backgroundColor: 'transparent'}}
//         drawerContent={(props) => {
//           setProgress(props.progress);
//           return <DrawerContent {...props} />;
//         }}>
//         <Drawer.Screen name="Screens">
//           {(props) => <Screens {...props} style={animatedStyle} />}
//         </Drawer.Screen>
//       </Drawer.Navigator>
//     </LinearGradient>
//   );
// };

// const styles = StyleSheet.create({
//   stack: {
//     flex: 1,
//     shadowColor: '#FFF',
//     shadowOffset: {
//       width: 0,
//       height: 8,
//     },
//     shadowOpacity: 0.44,
//     shadowRadius: 10.32,
//     elevation: 5,
//     // overflow: 'scroll',
//     // borderWidth: 1,
//   },
//   drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
//   drawerItem: {alignItems: 'flex-start', marginVertical: 0},
//   drawerLabel: {color: 'white', marginLeft: -16},
//   avatar: {
//     borderRadius: 60,
//     marginBottom: 16,
//     borderColor: 'white',
//     borderWidth: StyleSheet.hairlineWidth,
//   },
// });

// =======================
// import React from 'react';
// import {View, StyleSheet} from 'react-native';
// import {
//   useTheme,
//   Avatar,
//   Title,
//   Caption,
//   Paragraph,
//   Drawer,
//   Text,
//   TouchableRipple,
//   Switch,
// } from 'react-native-paper';
// import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';

// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// import {AuthContext} from '../components/context';

// export function DrawerContent(props) {
//   const paperTheme = useTheme();

//   const {signOut, toggleTheme} = React.useContext(AuthContext);

//   return (
//     <View style={{flex: 1}}>
//       <DrawerContentScrollView {...props}>
//         <View style={styles.drawerContent}>
//           <View style={styles.userInfoSection}>
//             <View style={{flexDirection: 'row', marginTop: 15}}>
//               <Avatar.Image
//                 source={{
//                   uri: 'https://api.adorable.io/avatars/50/abott@adorable.png',
//                 }}
//                 size={50}
//               />
//               <View style={{marginLeft: 15, flexDirection: 'column'}}>
//                 <Title style={styles.title}>Muhammad Yahya Suhada</Title>
//                 <Caption style={styles.caption}>@yahya.kun</Caption>
//               </View>
//             </View>

//             <View style={styles.row}>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   80
//                 </Paragraph>
//                 <Caption style={styles.caption}>Following</Caption>
//               </View>
//               <View style={styles.section}>
//                 <Paragraph style={[styles.paragraph, styles.caption]}>
//                   100
//                 </Paragraph>
//                 <Caption style={styles.caption}>Followers</Caption>
//               </View>
//             </View>
//           </View>

//           <Drawer.Section style={styles.drawerSection}>
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="home-outline" color={color} size={size} />
//               )}
//               label="Home"
//               onPress={() => {
//                 props.navigation.navigate('Home');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="account-outline" color={color} size={size} />
//               )}
//               label="Profile"
//               onPress={() => {
//                 props.navigation.navigate('Profile');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="bookmark-outline" color={color} size={size} />
//               )}
//               label="Bookmarks"
//               onPress={() => {
//                 props.navigation.navigate('BookmarkScreen');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="settings-outline" color={color} size={size} />
//               )}
//               label="Settings"
//               onPress={() => {
//                 props.navigation.navigate('SettingsScreen');
//               }}
//             />
//             <DrawerItem
//               icon={({color, size}) => (
//                 <Icon name="account-check-outline" color={color} size={size} />
//               )}
//               label="Support"
//               onPress={() => {
//                 props.navigation.navigate('SupportScreen');
//               }}
//             />
//           </Drawer.Section>
//           <Drawer.Section title="Preferences">
//             <TouchableRipple
//               onPress={() => {
//                 toggleTheme();
//               }}>
//               <View style={styles.preference}>
//                 <Text>Dark Theme</Text>
//                 <View pointerEvents="none">
//                   <Switch value={paperTheme.dark} />
//                 </View>
//               </View>
//             </TouchableRipple>
//           </Drawer.Section>
//         </View>
//       </DrawerContentScrollView>
//       <Drawer.Section style={styles.bottomDrawerSection}>
//         <DrawerItem
//           icon={({color, size}) => (
//             <Icon name="exit-to-app" color={color} size={size} />
//           )}
//           label="Sign Out"
//           onPress={() => {
//             signOut();
//           }}
//         />
//       </Drawer.Section>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   drawerContent: {
//     flex: 1,
//   },
//   userInfoSection: {
//     paddingLeft: 20,
//   },
//   title: {
//     fontSize: 16,
//     marginTop: 3,
//     fontWeight: 'bold',
//   },
//   caption: {
//     fontSize: 14,
//     lineHeight: 14,
//   },
//   row: {
//     marginTop: 20,
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   section: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginRight: 15,
//   },
//   paragraph: {
//     fontWeight: 'bold',
//     marginRight: 3,
//   },
//   drawerSection: {
//     marginTop: 15,
//   },
//   bottomDrawerSection: {
//     marginBottom: 15,
//     borderTopColor: '#f4f4f4',
//     borderTopWidth: 1,
//   },
//   preference: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     paddingVertical: 12,
//     paddingHorizontal: 16,
//   },
// });
