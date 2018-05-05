import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image
} from 'react-native';
import { Content, ListItem, List } from "native-base";
import * as firebase from "firebase";


//https://www.youtube.com/watch?v=WsZH-YG_JL4
let currentUser
export default class SearchBody extends Component {

addToList = async(movieName) => {
  currentUser = await firebase.auth().currentUser
  let databaseRef = await firebase.database().ref(currentUser.uid).child('list').push()
  databaseRef.set({
    name: movieName
  })
}

  render() {

    const movieData = this.props.movieData

    let movieItem = movieData.map((movie, i) => {
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
              <Text style={styles.textStyle}>No Image Available</Text>
            </ListItem>
          )
          }
          <ListItem itemDivider>
            <Text style={styles.textStyle}>Title:</Text>
          </ListItem>
          <ListItem>
            <View>
              <Text>{movie.name}</Text>
            </View>
            <View>
              <Button onPress={() => this.addToList(movie.name)} title="👀"></Button>
            </View>
          </ListItem>
          <ListItem itemDivider>
            <Text style={styles.textStyle}>Available Here:</Text>
          </ListItem>
          {movie.locations.map((location, i )=> {
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
      </Content>

    );
  }
}
const styles = StyleSheet.create({
  textStyle: {
    fontWeight: "bold"
  }
})
