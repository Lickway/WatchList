import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { Content, ListItem, List } from "native-base";


export default class SearchBody extends Component {
  render() {

    const movieData = this.props.movieData

    let movieItem = movieData.map((movie, i) => {
    console.log('movie name!!!!', movie.name)
      return(
        <List key={i}>
          { movie.picture ? (
            <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Image source={{ uri: movie.picture }} style={{ height: 250, width: 500 }} />
            </ListItem>
          )
          :
          (
            <ListItem itemDivider>
              <Text>No Image Available</Text>
            </ListItem>
          )

          }
          <ListItem itemDivider>
            <Text>Title:</Text>
          </ListItem>
          <ListItem>
            <View>
              <Text>{movie.name}</Text>
            </View>
            <View>
              <Button onPress={() => this.addToList(movie.name)} title="+My List"></Button>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Text>Available Here:</Text>
          </ListItem>
          {movie.locations.map((location, i )=> {
            console.log(location.display_name);
            return(
              <ListItem key={i}>
                <Text>{location.display_name}</Text>
              </ListItem>
            )
          })}

        </List>
    )})

    return (
      <Content>
        {movieItem}
        {/* { movieData.picture ? (
          <ListItem itemDivider style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Image source={{ uri: movieData.picture }} style={{ height: 250, width: 500 }} />
          </ListItem>
          )
          :
          (
          <ListItem itemDivider>
            <Text>No Image Available</Text>
          </ListItem>
          )
          }

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
          <Text>Locations</Text>
          </ListItem>


          {movieData.locations.map((location, i )=> {
          console.log(location.display_name);
          return(
            <ListItem key={i}>
          <Text>{location.display_name}</Text>
            </ListItem>
          )
        })} */}

      </Content>

    );
  }
}
