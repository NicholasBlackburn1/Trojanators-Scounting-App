import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class Alliances extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.chipText}>Alliance</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgb(230,230,230)",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50
  },
  chipText: {
    width: 95,
    height: 28,
    color: "rgba(0,0,0,0.87)",
    fontSize: 28,
    fontFamily: "comic-sans-ms-regular"
  }
});
