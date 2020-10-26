import React from 'react';
import {View, Text, ViewPropTypes, ImageBackground} from 'react-native';
import styles from './styleDrawer';
import bg from '../assets/bg.jpg';

function DrawerContent() {
  return (
    <View>
      <ImageBackground source={bg} style={styles.imgBg} blurRadius={5}>
        <Text>Halooo</Text>
      </ImageBackground>
    </View>
  );
}

export default DrawerContent;
