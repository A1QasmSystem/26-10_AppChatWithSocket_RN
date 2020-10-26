import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Scroll from './ui-ux-dashboard/scroll';
import Support from './ui-ux-dashboard/support';

export default class Mission extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{width: '100%', height: '120%'}}>
          <View style={styles.header}>
            <Text style={styles.inline}>My Profile</Text>
          </View>
          <View style={styles.memos}>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{width: '200%'}}
              showsHorizontalScrollIndicator={false}>
              <Scroll
                bgcolor="#FFBE86"
                background={require('./assets/graphtwo.png')}
                title="Full Name"
                month="Muhammad Yahya Suhada"
                animation="bounceInLeft"
              />
              <Scroll
                bgcolor="#7DC9E7"
                background={require('./assets/oo.png')}
                title="My Photos"
                month="Take in July 2020"
                animation="bounceInLeft"
              />
              <Scroll
                bgcolor="#FFBE86"
                background={require('./assets/graphtwo.png')}
                title="Status"
                month="Santri at Pondok Programmer"
              />
              <Scroll
                bgcolor="#7DC9E7"
                background={require('./assets/graphtwo.png')}
                title="Address"
                month="From Depok, West Java"
              />
            </ScrollView>
          </View>
          <View style={styles.supportview}>
            <Text style={styles.support}>Support</Text>
          </View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[
              styles.rectangleone,
              {
                shadowOffset: {width: 100, height: 100},
                shadowColor: 'rgba(138, 149, 158, 0.2)',
                shadowOpacity: 1,
                elevation: 30,
                backgroundColor: '#FFFFFF',
              },
            ]}>
            <Support
              image={require('./assets/exercise.png')}
              title="Activity"
              subtitle="Difficulty on insensible"
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInRight"
            duration={1500}
            style={[
              styles.rectangleone,
              {top: 580, backgroundColor: '#F4F9FC'},
            ]}>
            <Support
              image={require('./assets/apple.png')}
              title="Healty"
              subtitle="Occasional Preference fast"
            />
          </Animatable.View>
          <Animatable.View
            animation="fadeInLeft"
            duration={1500}
            style={[
              styles.rectangleone,
              {top: 690, backgroundColor: '#F4F9FC'},
            ]}>
            <Support
              image={require('./assets/cricket.png')}
              title="Sports and Yoga"
              subtitle="Services securing health ..."
            />
          </Animatable.View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flex: 1,
    left: 25,
    top: 50,
  },
  inline: {
    fontSize: 38,
    letterSpacing: -0.5,
    fontWeight: 'bold',
    color: '#2E2E2E',
  },
  memos: {
    height: 250,
    position: 'absolute',
    top: 160,
    width: '100%',
    marginLeft: 10,
  },
  supportview: {
    position: 'absolute',
    left: 25,
    top: 420,
  },
  support: {
    fontSize: 25,
    fontWeight: 'bold',
    letterSpacing: -0.5,
    color: '#2E2E2E',
  },
  rectangleone: {
    height: 85,
    width: 300,
    position: 'absolute',
    alignSelf: 'center',
    top: 470,
    borderRadius: 18,
  },
});
