import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class WinsDisplay extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.chipText}>Wins</Text>
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
    width: 59,
    height: 24,
    color: "rgba(0,0,0,0.87)",
    fontSize: 20,
    fontFamily: "comic-sans-ms-regular"
  }
});
