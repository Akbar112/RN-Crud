import React, { Component } from 'react';
import { Container, List, Left,Body,Right, Thumbnail,ListItem,Content, Form, Item, Input, Button, Text, Label } from 'native-base';
import {FlatList} from 'react-native';
import Headers from './Headers';
import axios from 'axios';

export default class Editscreen extends Component {
  constructor(props){
    super(props)

    this.state = {
      data : [],
      thumbnail : "", 
      title : "",
      content : ""
    }
  }

  componentDidMount(){
    axios.get('http://ec2-3-81-168-96.compute-1.amazonaws.com/api/materi/827c5921-5da7-4d44-8a00-5f6914d79481')
    .then(res => {
      const newData = this.state.data.concat(res.data);
      this.setState({
        data : newData,
        thumbnail : res.data.thumbnail,
        title : res.data.title,
        content : res.data.content
      })
    })
    .catch(err => {
      throw err;
    });
  }

  handlethumbnail = (val) => {
    this.setState({
      thumbnail : val
    })
  }

  handletitle = (val) => {
    this.setState({
      title : val
    })
  }

  handlecontent = (val) => {
    this.setState({
      content : val
    })
  }

  handleEdit = (uuid) => {
    const {thumbnail,title,content} = this.state;
    this.props.navigation.state.params.handleEdit(thumbnail,title,content,uuid)
    this.setState({
      thumbnail : "",
      title : "",
      content : ""
    })
  }

  render() {
    const {uuid} = this.props.navigation.state.params
    return (
      <Container>
        <Headers navigation={this.props.navigation} handleEdit={this.handleEdit} id={uuid}/>
        <Content>
          <List style={{marginTop:10}}>
          <FlatList
              data={this.state.data}
              keyExtractor={(item, index) => item._id}
              renderItem={({item, index}) => (
                <ListItem 
                  style={{marginRight:20}}
                  avatar 
                >
                  <Left>
                    <Thumbnail style={{backgroundColor:"#1e88e5"}} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png' }} />
                  </Left>
                  <Body>
                    <Text>{item.thumbnail}</Text>
                    <Text>{item.title}</Text>
                    <Text>{item.content}</Text>
                  </Body>
                </ListItem>
              )}
            />
          </List>
          
          <Text style={{alignSelf:"center", marginTop:20, marginBottom:20, color : "#aaa"}}>Fill the form to edit</Text>

          <Form style={{marginRight:20, marginLeft:5}}>
            <Item stackedLabel>
              <Label>Thumbnail</Label>
              <Input value={this.state.thumbnail} onChangeText={this.handlethumbnail}/>
            </Item>
            <Item stackedLabel>
              <Label>Title</Label>
              <Input value={this.state.title} onChangeText={this.handletitle}/>
            </Item>
            <Item stackedLabel>
              <Label>Content</Label>
              <Input value={this.state.concat} onChangeText={this.handlecontent}/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}