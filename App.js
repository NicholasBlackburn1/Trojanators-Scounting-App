import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teams_info from "./SRC/Teams_info";


export default function App()
{
  return (
    
    <View style={styles.container}>
      
     <Teams_info/>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
