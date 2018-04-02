import {React , Component} from 'react';
import {Button, Text, View, StyleSheet} from 'react-native';
import t from 'tcomb-form-native';

 
const Form=t.form.Form;

const User = t.struct({
    Farmer_Id: t.String,
    District: t.String,
    Farmer_Name : t.String,
    Crop:t.String,
    Survey_Number: t.String,
    Crop_Category : t.String,
    Farmer_Remarks: t.String,
    Inspection_Remarks: t.String,
    FIR_Number: t.String,

})
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });
export default class CropReport extends Component{
    handleReportSubmission=()=>{
        const value = this.Report.getValue();
        console.log('Values:',value);
    }
    render(){
        return(
            <View style={styles.container}>
            <Form type={User}/>
            <Button
            title="Send Report"
            onPress={this.handleReportSubmission}
            />
            </View>
        );
    }
}