import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';
import { Content, ListItem } from "native-base";


export default class SearchBody extends Component {
  render() {

    const movieData = this.props.movieData

    return (
      <Content>
        <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>

          <Image source={{ uri: movieData.large }} style={{ height: 200, width: 200 }} />

        </ListItem>
        <ListItem itemDivider>
          <Text>Title</Text>
        </ListItem>
        <ListItem>
          <View>
            <Text>{movieData.name}</Text>
          </View>
          <View>
            <Button onPress={() => this.addToList(movieData.name)} title="+My List"></Button>
          </View>
        </ListItem>
        <ListItem itemDivider>
          <Text>Category</Text>
        </ListItem>
        <ListItem >
          <Text>{movieData.style.category.name}</Text>
        </ListItem>

        <ListItem itemDivider>
          <Text>Description</Text>
        </ListItem>
        <ListItem >
          <Text>{movieData.description}</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>Rating</Text>
        </ListItem>
        <ListItem >
          <Text>{movieData.abv}</Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>Is is Organic?</Text>
        </ListItem>
        <ListItem>
          <Text> {movieData.isOrganic == 'Y' ? 'Yes' : 'No'} </Text>
        </ListItem>
        <ListItem itemDivider>
          <Text>
            <Text> Availablity</Text>
          </Text>
        </ListItem>
        <ListItem>
          <Text>{movieData.available.description ? movieData.available.description : 'No info'}</Text>
        </ListItem>
      </List>
      </Content>
    );
  }
}
