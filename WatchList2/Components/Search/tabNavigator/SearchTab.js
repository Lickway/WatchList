import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Container, Content } from 'native-base';
import SearchBar from "../SearchBar";


export default class SearchTab extends Component {

  static navigationOptions= {
    header: null
  }

  render() {
    return (
      <Container>
        <SearchBar />
        <Content>

        </Content>
      </Container>
    );
  }
}
