import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { ThemeConsumer } from "react-native-elements";

export default class LossesDisplay extends Component {
    
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        
        <Text style={styles.chipText} onPress = {this.updateText}> 
               Losses </Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230,230,230)",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 13,
    paddingLeft: 13,
    borderRadius: 50
  },
  chipText: {
    color: "rgba(0,0,0,0.87)",
    fontSize: 28,
    fontFamily: "comic-sans-ms-regular"
  }
});
