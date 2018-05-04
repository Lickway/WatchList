import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Keyboard
} from 'react-native';
import { Container, Content } from 'native-base';
import SearchBar from "../SearchBar";
import SearchBody from "../SearchBody";
import axios from 'axios';


export default class SearchTab extends Component {

  state = {
    movieSearch: '',
    movieData: {},
    movieFound: false
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
        let data = response.data.results
        console.log('search data', data);
        if (data) {
          this.setState({
            movieData: data,
            movieFound: true
          })
        }
    }).catch((error) => {
      this.setState({
        movieFound:false
      })
    })
  }

  renderContent = () => {
    //location name {this.state.movieData.locations[0].display_name}
    //location url {this.state.movieData.locations[0].url}
    //movie name {this.state.movieData.name}
    //movie picture {this.state.movieData.picture}
    if(this.state.movieFound) {
      return <SearchBody movieData={this.state.movieData} />
    }
    else {
      console.log("Movie not found");
    }
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
          {this.renderContent()}
        </Content>
      </Container>
    );
  }
}
