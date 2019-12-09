import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Label, Thumbnail } from 'native-base';

import Headers from './Headers';

export default class Addscreen extends Component {
  constructor(props){
    super(props);

    this.state = {
      thumbnail : "", 
      title : "",
      content : ""
    }
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

  handlePostClick = () => {
    const {thumbnail,title,content} = this.state;
    this.props.navigation.state.params.handlePostClick(thumbnail,title,content)
    this.setState({
      thumbnail : "",
      title : "",
      content : ""
    })
  }

  render() {
    return (
      <Container>
        <Headers navigation={this.props.navigation} handlePostClick={this.handlePostClick}/>
        <Content>
          <Thumbnail style={{marginTop : 20,marginBottom:10, alignSelf:"center", backgroundColor:"#1e88e5"}} source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Gnome-stock_person.svg/1024px-Gnome-stock_person.svg.png"}} />
          <Form style={{marginRight:20, marginLeft:5}}>
            <Item floatingLabel>
              <Label>thumbnail</Label>
              <Input value={this.state.thumbnail} onChangeText={this.handlethumbnail} required/>
            </Item>
            <Item floatingLabel>
              <Label>title</Label>
              <Input value={this.state.title} onChangeText={this.handletitle} required/>
            </Item>
            <Item floatingLabel>
              <Label>content</Label>
              <Input value={this.state.content} onChangeText={this.handlecontent} required/>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}