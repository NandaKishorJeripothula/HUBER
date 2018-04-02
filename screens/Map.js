import React from 'react';
import { StyleSheet, ListView,Text, Button,View, Dimensions } from 'react-native';
import MapView from 'react-native-maps';
import CropReport from './CropReport';
import CropDetails from './CropDetails';
import {StackNavigator} from 'react-navigation';
  

const AppNavigator =StackNavigator({
    
    CropDetails: {
        screen:CropDetails,
      navigationOptions:({navigation})=>({
        title: 'HUBER-Crop Details',
        headerStyle:{
        backgroundColor:'#007715',
        }
    })              
    },  
    CropReport: {
          screen:CropReport,
        navigationOptions:({navigation})=>({
          title: 'HUBER-Crop Report',
          headerStyle:{
          backgroundColor:'#007715',
          }
      })              
      },
    
    })

export default class Map extends React.Component {
    constructor(props){
        super(props);
        this.state={
            markers:[
                { 
                    key:1,
                    title:"Nizampet",
                    coordinates:{
                        latitude:17.525615, 
                        longitude:78.366180
                    }
                },
            
                {   
                    key:2,
                    title:"Nizampet-krishnaja hills",
                    coordinates:{
                        latitude:17.524834, 
                        longitude:78.361083
                    }
                },
            
                {
                    key:3,
                    title:"Bachupally",
                    coordinates:{
                        latitude:17.530959, 
                        longitude:78.362827
                    } 
                },
                {
                    key:4,
                    title:"Mallampet",
                    coordinates:{
                        latitude:17.587585, 
                        longitude:78.360000
                    }
                },
                {
                    key:5,
                    title:"Kazipally",
                    coordinates:{
                        latitude:17.563542, 
                        longitude:78.357073
                    }
                },
                {
                    key:6,
                    title:"Bowrampet",
                    coordinates:{
                        latitude:17.563435, 
                        longitude:78.369364
                    }
                },
                {
                    key:7,
                    title:"Bollaram",
                    coordinates:{
                        latitude:17.560320, 
                        longitude:78.338635
                    }
                },
                {
                    key:8,
                    title:"Gandhinagar",
                    coordinates:{
                        latitude:17.557332, 
                        longitude:78.342990
                    }
                },
                {
                    key:9,
                    title:"Mayurinagar",
                    coordinates:{
                        latitude:17.518652, 
                        longitude:78.366065
                    }
                },
            ]
        };
    }

  render() {
    const {navigate}= this.props.navigation;
    return (
      <View style={styles.container}>
        <MapView
                style={styles.map}
                showsUserLocation ={true}
                followsUserLocation={true}
                showsMyLocationButton={true}
                cacheEnabled={true}
                mapType="satellite"
                region={{
                    latitude: 17.560320, 
                    longitude:78.338635,
                    latitudeDelta: 0.15,
                    longitudeDelta: 0.15,
                }}
            >
            {this.state.markers.map(marker => (
                <MapView.Marker 
                coordinate={marker.coordinates}
                title={marker.key+ ' ' +marker.title}
                description={ "Lat:"+marker.coordinates.latitude+"\n Lang:"+marker.coordinates.longitude+"\n FormerName:anbd"}
                key={marker.key}
                >
                </MapView.Marker>
            ))}

            </MapView>
            <View>
                <Button
                title="View Detailed Information !!! "
                onPress={()=>navigate('CropDetails')}
                />
            </View>
      </View>
    );
  }
}
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
  },
});
