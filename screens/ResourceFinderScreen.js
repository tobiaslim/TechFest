import React from 'react';
import {
  ImageBackground,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';

export default class ResourceFinderScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.greeting}>ResourceFinderScreen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  homebgimg:{
    width: '100%',
    height: 250,
    resizeMode: 'contain'
  },
  greeting: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 20,
    color: 'red'
  },
  overlay:{
    width: '100%',
    height: '100%',
    backgroundColor:"rgba(255,33,33,0.42)",
    paddingTop:'5%'
  },
  quickAccess:{
    width:"90%",
    height:"60%",
    backgroundColor:"white",
    alignSelf:"center",
    borderRadius: 5,
  },
  shadowStyle:{
    shadowColor:"#000000",
    shadowOpacity:0.8,
    shadowRadius:2,
    shadowOffset:{
      height:1,
      width:0
    }
  },
  quickAccessScroller:{
    flex:0,
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  quickAccessItem:{
    height:'80%',
    marginVertical:"5%",
    marginHorizontal: 20,
  },
  quickAccessItemText:{
    textAlign: 'center',
    flexWrap: 'wrap'
  },
  quickAccessItemImage:{
    width: 80,
    height: 80
  }
});
