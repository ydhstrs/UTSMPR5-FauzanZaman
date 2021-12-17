import React, { Component } from 'react';

import {ActivityIndicator, FlatList, View, Text, TouchableOpacity, Button, Image, ScrollView, TextInput, StyleSheet} from 'react-native'

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
      isLoading: true
          };
    }
    async getMovies() {
        try {
          const response = await fetch('https://reactnative.dev/movies.json');
          const json = await response.json();
          this.setState({ data: json.movies });
        } catch (error) {
          console.log(error);
        } finally {
          this.setState({ isLoading: false });
        }
      }

  componentDidMount() {
    this.getMovies();
  }
    render() {
      const { data, isLoading } = this.state;
        return (
    <ScrollView>
        <View style={{
        backgroundColor : '#0B4619'
      }}>
       <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize : 38,
        color : '#FFCC1D'
      }}>UTS</Text>
      <Text
      style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 5,
        fontSize  : 48,
        color : '#FFCC1D'
      }}>MPR Lab</Text>
      </View>

        <View style={styles.container}>
            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Home')} title='Home'color="#116530"/>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('Message')} title='Message'color="#116530"/>
            </View>

              <View style={styles.buttonContainer}>
            <Button onPress={()=> this.props.navigation.navigate('About', {nama : 'Fauzan Zaman'})} title='About' color="#116530"/>

            </View>
        </View>
      <View>
      <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 1,
        fontSize  : 25,
        color : '#519259'}}>
        TENTANG IMILKOM
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
        color : '#519259'}}>
     IMILKOM Adalah Organisasi Mahasiswa yang Menaungi Mahasiswa S-1 Ilmu Komputer USU
      </Text>
      </View>
    <View>
    <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 4,
        fontSize  : 20,
        color : '#519259'}}>
       {/* {this.props.route.params.nama} */}
      </Text>
      <View>
      </View>
          <Text style={{
        fontWeight  : 'bold',
        fontStyle   : 'normal',
        textAlign   : 'center',
        letterSpacing: 2,
        fontSize  : 20,
        color : '#519259'}}>
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