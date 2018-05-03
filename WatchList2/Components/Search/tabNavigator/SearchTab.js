import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard
} from 'react-native';
import { Container, Content } from 'native-base';
import SearchBar from "../SearchBar";
import axios from 'axios';


export default class SearchTab extends Component {

  state = {
    movieSearch: '',
    movieData: []
  }

  searchMovie = () => {
    Keyboard.dismiss()
    const movieName = this.state.movieSearch.toLowerCase();
    const url = `https://utelly-tv-shows-and-movies-availability-v1.p.mashape.com/lookup?country=uk&term=${movieName}`
    axios({
      method:'get',
      url: url,
      headers : {
        "X-Mashape-Key": "WdeJv01d8OmshF6b5z6UaCc6Ugkfp1Bp0C1jsnrtgKxPj6BMMY",
        "Accept": "application/json"
      }
    })
      .then((response) => {
      console.log(response.data);
    });

  }

  static navigationOptions= {
    header: null
  }

  render() {
    return (
      <Container>
        <SearchBar
          value={this.state.movieSearch}
          onChangeText={(movieSearch) => this.setState({movieSearch})}
          searchMovie={this.searchMovie}
        />
        <Content>

        </Content>
      </Container>
    );
  }
}
