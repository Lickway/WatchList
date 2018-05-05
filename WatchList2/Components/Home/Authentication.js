import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import * as firebase from "firebase";
import { Container, Content, Header, Form, Input, Item, Button, Label } from "native-base";

export default class Authentication extends Component {

  constructor(props){
    super(props)
    this.state=({
      email: '',
      password: '',
      loggedIn: false
    })
  }

  registerUser = (email, password) => {
    try{
      if(this.state.password.length<6)
      {
        alert("Please enter 6 characters minimum")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch(error){
      console.log(error.toString());
    }
  }

  loginUser = (email, password) => {
    try{
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user){
        this.setState({
          loggedIn: true
        }
        )
      })
    }
    catch(error){
      console.log(error.toString());
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email</Label>
            <Input
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(email) => this.setState({email})}
            />

          </Item>
          <Item floatingLabel>
            <Label>Passwrod</Label>
            <Input
              secureTextEntry={true}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={(password) => this.setState({password})}
            />
          </Item>
          <Button
            style={styles.button}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text style={styles.buttonText}>Login</Text>
          </Button>
          <Button
            style={styles.button}
            full
            rounded
            primary
            onPress={() => this.registerUser(this.state.email, this.state.password)}
          >
            <Text style={styles.buttonText}>Register</Text>
          </Button>
        </Form>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
  button: {
    marginTop: 10
  },
  buttonText: {
    color: "white"
  }
})
