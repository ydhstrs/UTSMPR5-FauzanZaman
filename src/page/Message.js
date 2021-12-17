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
        backgroundColor : '#30475E'
      }}>
       <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize : 38,
        color : '#F05454'
      }}>UTS</Text>
      <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize  : 48,
        color : '#F5F5F5'
      }}>MPR Lab</Text>
      </View>

        <View style={styles.container}>
        
            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Home')} title='Home'color="#064663"/>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Message')} title='Message'color="#064663"/>
            </View>

              <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('About', {nama : 'Yudha'})} title='About' color="#064663"/>
            </View>
        </View>
      <View>
      <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 20,
        color : '#2D4263'}}>
        PENGALAMAN SELAMA DI GENBI 8
      </Text>
      </View>

      <View 
      style={{alignItems:'center'}}>
        <Image source={require('./IMG_5580.jpg')}
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
        title="Hapus Deskripsi"
        color="#406882"
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