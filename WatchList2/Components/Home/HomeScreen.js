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

class HomeScreen extends Component {

static navigationOptions= {
  header: null
}

  render() {
    return (
      <View style={styles.homeScreenView}>

        <View style={styles.logoView}>
          <Image source={logoPhoto} style={styles.logoPhoto}/>
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
    justifyContent: 'flex-end'
  },
  searchButtonText: {
    color: 'white'
  },
  logoPhoto: {
    flex: 1,
    height: null,
    width: null
  },
  logoView: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%'
  }
})

export default HomeScreen;
