import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Button, Image, ScrollView, TextInput, StyleSheet} from 'react-native'
class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description : ''
         };
    }
    render() {
        return (
           
      <ScrollView>
      
      
       <View style={{
        backgroundColor : '#1E5128'
      }}>
       <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize : 38,
        color : '#EBE645'
      }}>UTS</Text>
      <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize  : 48,
        color : '#EBE645'
      }}>MPR Lab</Text>
      </View>

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Home')} title='Home'color="#1E5128"/>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Message')} title='Message'color="#1E5128"/>
            </View>

              <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('About', {nama : 'Fauzan Zaman'})} title='About' color="#1E5128"/>

            </View>
        </View>
      <View>
      <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 25,
        color : '#519259'}}>
        KOTAK ASPIRASI IMILKOM
      </Text>
      <Text style={{
        fontWeight  : 'normal',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 2,
        fontSize  : 15,
        color : '#519259'}}>
        Tuliskan Aspiasimu Untuk IMILKOM USU
      </Text>
      </View>

      <View 
      style={{alignItems:'center'}}>
        <Image source={require('./message.png')}
        style={{resizeMode:'contain', height: 220, marginTop: 50}} />
        </View>
        <View>
        <TextInput 
      value={this.state.description}
      style={{borderBottomWidth:1, marginHorizontal: 40}}
      onChangeText={(value)=> this.setState({description : value})}
      />
      </View>

      <View style={{marginTop:20, marginHorizontal:110}}>
        <Button

        onPress={()=> this.setState({description : " "})}
        title="Hapus Pesan"
        color="#1E5128"
        accessibilityLabel="Learn more about this purple button"
/>
        </View>
      </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1,
  }
});

export default Message;