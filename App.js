import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Teams_info from "./SRC/Teams_info";
import Mainmenu from "./SRC/MainPage";
import Data_update from "./SRC/components/Data_update";

export default function App()
{
  return (
    
    <View style={styles.container}>
      <Mainmenu>
        
      </Mainmenu>
    
      
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
