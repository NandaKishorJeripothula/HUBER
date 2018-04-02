import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import Map from './screens/Map';
import Splashscreen from './screens/SplashScreen';
import CropReport from './screens/CropReport';
import CropDetails from './screens/CropDetails';
import {StackNavigator} from 'react-navigation';

export default class App extends React.Component {
  
  render() {
    return (
        <AppNavigator/>
    );
  }
}

const AppNavigator =StackNavigator({
         
  SplashScreen:{screen: Splashscreen,
    navigationOptions:({navigation})=>({
    title: 'HUBER',
    headerStyle:{
        backgroundColor:'#007715',
    }
    })
    },
    Map: {screen:Map,
    navigationOptions:({navigation})=>({
        title: 'HUBER-Verificaiton Schedule',
        headerStyle:{
        backgroundColor:'#007715',
        }
    })              
    },
    
    CropDetails: {
        screen:CropDetails,
      navigationOptions:({navigation})=>({
        title: 'HUBER-Crop Details',
        headerStyle:{
        backgroundColor:'#007715',
        }
    })              
    },  
    CropReport: {screen:CropReport,
        navigationOptions:({navigation})=>({
            title: 'HUBER-Crop Report',
            headerStyle:{
            backgroundColor:'#007715',
            }
        })              
        },
  
  })
  
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map:{
    flex: 1,
    width,
    height

  }
});
