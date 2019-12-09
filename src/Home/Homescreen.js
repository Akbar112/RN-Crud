import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList} from 'react-native';
import{Fab} from 'native-base';
import {ListItem, Icon } from 'react-native-elements'
import axios from 'axios';
 
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.state = {
        materi: []
    };
  }
  componentDidMount() {
    axios.get(`http://ec2-3-81-168-96.compute-1.amazonaws.com/api/materi`)
      .then(res => {
        const materi = res.data.data;
        console.log(materi);
        this.setState({ materi });
      })
  }
 
  keyExtractor = (item, index) => index.toString()
  renderItem = ({ item }) => (
  <ListItem
    title={item.title}
    subtitle={item.content}
    leftAvatar={{ source: { uri: item.thumbnail } }}
  />
)
  render() {
    return (
        <View style={styles.container} >
         
            <FlatList
               keyExtractor={this.keyExtractor}
               data={this.state.materi}
               renderItem={this.renderItem}
             />
        <Fab
            style={{ backgroundColor: '#1e88e5' }}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate("Add", {handlePostClick:this.handlePostClick})}>
            <Icon  name='plus' type='font-awesome' />
        </Fab>
       </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
       flex: 1,
  },
  txtHeader: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'#fff'
  },
  header: {
    height:70,
    backgroundColor:'brown',
    justifyContent:'center',
    alignItems:'center'
  },
});