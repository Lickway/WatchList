import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { StackNavigator } from "react-navigation";
import HomeScreen from "./Components/Home/HomeScreen";
import SearchTabNavigator from "./Components/Search/SearchTabNavigator";
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB1WHUpgphGI14IXJrV_jMPwi71HZ5LOw0",
  authDomain: "watchlist-c196d.firebaseapp.com",
  databaseURL: "https://watchlist-c196d.firebaseio.com",
  projectId: "watchlist-c196d",
  storageBucket: "watchlist-c196d.appspot.com",
  messagingSenderId: "463334371065"
}
firebase.initializeApp(firebaseConfig);

console.ignoredYellowBox = ['Remote debugger'];

const App = StackNavigator({

  HomeScreen: { screen : HomeScreen },
  SearchTabNavigator: { screen : SearchTabNavigator }

},{
  initialRouteName: 'HomeScreen'
})

export default App;
