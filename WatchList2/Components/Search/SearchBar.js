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
            placeholder="Search for a movie"
            onChangeText={this.props.onChangeText}
            // https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
            returnKeyType="search"
            onSubmitEditing={this.props.searchMovie}
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
