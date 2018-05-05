import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

import { Button } from "native-base";
let logoPhoto = require('../../assets/HomeScreen/MovieListLogo.jpg')
import * as firebase from "firebase";

class HomeScreen extends Component {

static navigationOptions= {
  header: null
}

  render() {
    return (
      <View style={styles.homeScreenView}>

        <View style={styles.logoView}>
          <Image source={logoPhoto} style={styles.logoPhoto} />
        </View>

        <Button
          block={true}
          onPress={() => this.props.navigation.navigate('SearchTabNavigator')}
        >
          <Text style={styles.searchButtonText}>Search Movies</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  homeScreenView: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'white'
  },
  searchButtonText: {
    color: 'white'
  },
  logoPhoto: {
    flex: 1,
    height: 100,
    width: 400
  },
  logoView: {
    top: 0,
    left: 0,
    height: '80%',
    width: '80%'
  }
})

export default HomeScreen;
