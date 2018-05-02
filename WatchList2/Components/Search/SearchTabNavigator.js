import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Footer, FooterTab, Button, Icon } from 'native-base';

import { TabNavigator } from 'react-navigation';
import SearchTab from './tabNavigator/SearchTab';
import ListTab from './tabNavigator/ListTab';

const SearchTabNavigator = TabNavigator({
  SearchTab: {screen:SearchTab},
  ListTab: {screen:ListTab}
},{
  tabBarPosition: 'bottom',
  tabBarComponent: props => {
    return(

      <Footer>
        <FooterTab>
          <Button
            vertical
          >
            <Icon name='movie' />
            <Text>
              Search
            </Text>

          </Button>
          <Button
            vertical
          >
            <Icon name='list' />
            <Text>
              My List
            </Text>
          </Button>
        </FooterTab>
      </Footer>

    )
  }
})

export default SearchTabNavigator;
