import React,{Component} from 'react';
import {Text, View,Button,Image, StyleSheet} from 'react-native';
import CropReport from './CropReport';

import {StackNavigator} from 'react-navigation';
  

const AppNavigator =StackNavigator({
      Map: {screen:CropReport,
      navigationOptions:({navigation})=>({
          title: 'HUBER-Crop Report',
          headerStyle:{
          backgroundColor:'#007715',
          }
      })              
      },
    
    })
    
export default class CropDetails extends React.Component{
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
        <Text></Text>
        <View>
                <Button
                title="View Detailed Information !!! "
                onPress={()=>navigate('CropReport')}
                />
            </View>
        </View>
    );
}
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f3e0e0',
      textAlignVertical: 'auto',
    },
  });
  