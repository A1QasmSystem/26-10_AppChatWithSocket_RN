import React, {Component} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import styles from './styleHome';
import derp from '../assets/derp.jpg';
import search from '../assets/search.png';
import pencil from '../assets/pencilOutline.png';
import trash from '../assets/trash.png';
import checkboxtrue from '../assets/checkboxfilled.png';
import checkboxfalse from '../assets/checkboxempt.png';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.mainView}>
        <ScrollView>
          <View style={styles.subView}>
            <View style={styles.subViewProfile}>
              <Image source={derp} style={styles.pfpic} />
              <View style={styles.subViewProfileText}>
                <Text style={styles.textProfile}>Hi Yahya,</Text>
                <Text style={styles.subTextProfile}>How're you today?</Text>
              </View>
            </View>
            <View style={styles.viewSearch}>
              <View style={styles.subViewSearch}>
                <Image source={search} style={styles.imgSearch} />
                <TextInput placeholder="Search your target..." />
              </View>
            </View>
            <Text style={styles.textTarget}>Your target</Text>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxtrue} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxtrue} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxtrue} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxtrue} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxfalse} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={styles.viewList}>
              <View style={styles.subViewList}>
                <Image source={pencil} style={styles.imgPencil} />
                <Text>Membuat Aplikasi Muslim List</Text>
                <View style={styles.subViewImg}>
                  <TouchableOpacity>
                    <Image source={checkboxtrue} style={styles.imgPencil} />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image source={trash} style={styles.imgPencil} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
