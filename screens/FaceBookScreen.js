import * as React from 'react';
import {Text, View} from 'react-native';

export default class FaceBookScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
                <Text>Welcome To FACEBOOK</Text>
                <Text>What's on your mind?</Text>
            </View>
        )
    }
}
