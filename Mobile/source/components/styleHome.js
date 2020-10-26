import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    backgroundColor: '#f0f0f0',
  },
  subView: {
    margin: 20,
  },
  pfpic: {
    width: 45,
    height: 45,
    borderRadius: 30,
  },
  subViewProfile: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  subViewProfileText: {
    marginLeft: 20,
  },
  textProfile: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subTextProfile: {
    color: 'grey',
  },
  viewSearch: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: '15%',
  },
  subViewSearch: {
    flexDirection: 'row',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  imgSearch: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  textTarget: {
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
  },
  viewList: {
    height: 45,
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 5,
  },
  subViewList: {
    marginHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgPencil: {
    width: 25,
    height: 25,
    marginRight: '2%',
  },
  subViewImg: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  viewFloat: {
    alignItems: 'flex-end',
    flex: 1,
  },
  subViewFloat: {
    backgroundColor: 'cyan',
    width: 50,
    height: 50,
    borderRadius: 40,
    position: 'absolute',
  },
  subTextFloat: {
    fontSize: 50,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
