import React,{Component} from 'react';
import {Text, View,Button,Image, StyleSheet} from 'react-native';
import Map from './Map';

import {StackNavigator} from 'react-navigation';
  

const AppNavigator =StackNavigator({
      Map: {screen:Map,
      navigationOptions:({navigation})=>({
          title: 'HUBER-Verificaiton Schedule',
          headerStyle:{
          backgroundColor:'#007715',
          }
      })              
      },
    
    })
    
export default class SplashScreen extends React.Component{
render(){
    const {navigate}= this.props.navigation;
    return(
        <View
        style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
        }}
        >
            <Image
            source={require('../splash.png')}
            />            
            <Button
            title="Getting Started"
            onPress={() =>
                navigate('Map')
              }
            />


        </View>
    );
}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3e0e0',
      alignItems: 'center',
      justifyContent: 'center',
      textAlignVertical: "center",
    },
  });
  