import React, { useEffect } from "react";
import {
  View,
  Text
} from 'react-native';

export default function Top(props){

  useEffect(() => {
    const userLogin = true;
    props.navigation.navigate(userLogin ? 'App' : 'Auth');
  }, []);

  return (<View style={{flex : 1}}><Text style={{color : 'red'}}>Top</Text></View>);
}