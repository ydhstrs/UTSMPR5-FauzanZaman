import React, { Component } from 'react';

import {View, Text, TouchableOpacity, Button, Image, ScrollView, TextInput, StyleSheet} from 'react-native'

class About extends Component {
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
        fontSize  : 20,
        color : '#2D4263'}}>
       TENTANG GENBI 8
      </Text>
      </View>

      <View>
      <Text style={{
        fontWeight  : 'normal',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 1,
        fontSize  : 15,
        marginTop : 70,
        color : '#2D4263'}}>
       Generasi Baru Indonesia (GenBI) merupakan komunitas yang terdiri dari mahasiswa/i penerima beasiswa Bank Indonesia yang berada di bawah naungan Bank Indonesia. 
      </Text>
      </View>
    <View>
    <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 20,
        color : '#2D4263'}}>
       {/* {this.props.route.params.nama} */}
      </Text>
      <View>
      </View>
          <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 20,
        color : '#2D4263'}}>
      {this.props.route.params.nama} 
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

export default About;