import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ListView
} from 'react-native';
import * as firebase from "firebase";
import { Container, Content, ListItem } from "native-base";

const data = [];
const currentUser = ""

export default class ListTab extends Component {

  constructor(props){
    super(props)
    this.ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2})
    this.state = {
      listViewData: data
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

  render() {
    return (
      <Container style={styles.listContainer}>
        <Content>
          <ListView
            enableEmptySections
            dataSource={this.ds.cloneWithRows(this.state.listViewData)}
            renderRow={data =>
              <ListItem
                onPress={() => this.props.navigation.navigate("SearchTabNavigator",
                  {movieName:data.val().name})}>
                <Text>{data.val().name}</Text>
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
  }
})
