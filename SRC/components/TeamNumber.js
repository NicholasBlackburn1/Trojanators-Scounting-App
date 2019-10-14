import React, { Component } from "react";
import { StyleSheet, View, Image, Text } from "react-native";

export default class TeamNumber extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Image
          
          style={styles.leftImage}
        />
        <Text style={styles.chipText}>Team Number</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230,230,230)",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 50
  },
  leftImage: {
    width: 32,
    height: 32,
    backgroundColor: "#CCC",
    borderRadius: 16
  },
  chipText: {
    color: "rgba(0,0,0,0.87)",
    paddingRight: 12,
    paddingLeft: 12,
    fontSize: 13
  }
});
