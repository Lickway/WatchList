import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import * as firebase from "firebase";
import { Container, Content, ListItem, CheckBox } from "native-base";

const data = [];
const currentUser = ""

export default class ListTab extends Component {

  constructor(props){
    super(props)
    //firebase specific checking to see if DB is changing
    this.ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
    this.state = {
      listViewData: data,
      checked: false
    }
  }

  componentDidMount(){
    this.getList()
  }

  getList = async() =>{
    currentUser = await firebase.auth().currentUser
    let that = this
    firebase.database().ref(currentUser.uid).child('list').on('child_added', function(data){
      let newData = [...that.state.listViewData]
      newData.push(data)

      that.setState({
        listViewData: newData
      })
    })
  }

  selectCheckBox = () =>{
    if(this.state.checked === false) {
      this.setState({
        checked: true
      })
    } else {
      this.setState({
        checked: false
      })
    }

  }

  render() {
    return (
      <Container style={styles.listContainer}>
        <Content>
          <ListView
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              // <ListItem
              //   onPress={() => this.props.navigation.navigate("SearchTabNavigator",
              //     {movieName:data.val().name})}>
              <ListItem>
                <CheckBox style={styles.checkbox} checked={this.state.checked} color="blue" onPress={() => this.selectCheckBox()}/>
                <Text style={styles.listText} onPress={() => this.props.navigation.navigate("SearchTabNavigator",
                  {movieName:data.val().name})}>{data.val().name}</Text>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  listContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  checkbox: {
    margin: 5
  },
  listText: {
    marginLeft: 10
  }
})
