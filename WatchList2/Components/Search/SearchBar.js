import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Header, Item, Icon, Input } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <Header
        style={styles.header}
        searchBar
        rounded
      >
        <Item>
          <Icon name='search'/>
          <Input

          />
        </Item>

      </Header>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 80
  }
})
