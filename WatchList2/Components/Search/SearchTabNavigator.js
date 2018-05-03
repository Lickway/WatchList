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
            //https://stackoverflow.com/questions/41224418/react-native-add-active-class-when-push-the-button
            active={props.navigationState.index === 0}
            onPress={() => props.navigation.navigate('SearchTab')}
            vertical

          >
            <Icon name='film' />
            <Text>
              Search
            </Text>

          </Button>
          <Button
            active={props.navigationState.index === 1}
            onPress={() => props.navigation.navigate('ListTab')}

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
