import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Button, Image, ScrollView, TextInput, StyleSheet} from 'react-native'

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
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
            <Button onPress={()=> this.props.navigation.navigate('About')} title='About' color="#064663"/>

            </View>
        </View>
      <View>
      <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 25,
        color : '#2D4263'}}>
        SELAMAT DATANG ENERGI UNTUK NEGERI
      </Text>
      </View>

      <View 
      style={{alignItems:'center'}}>
        <Image source={require('./genbi.png')}
        style={{resizeMode:'contain', height: 220, marginTop: 50}} />
        </View>
      <View>
      <Text style={{        
        fontWeight  : 'normal',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 2,
        fontSize  : 15,
        color : '#2D4263'}}>
        APLIKASI UJI COBA UNTUK UTS MPR 5 BERTEMAKAN GENBI
      </Text>
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

export default Home;