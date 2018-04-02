import {React , Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
export default class CropReport extends Component{
    handleSubmit = () => {
        const value = this._form.getValue();
        console.log('value: ', value);
      }
      
      render() {
        return (
          <View style={styles.container}>
           <Text>Email:</Text>
            <TextInput style={styles.input} />
            <TouchableOpacity>
                <Text style={styles.button}>Submit</Text>
            </TouchableOpacity>
                </View>
        );
      }
}