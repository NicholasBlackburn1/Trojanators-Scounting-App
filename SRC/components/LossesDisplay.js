import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

export default class LossesDisplay extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.chipText}>LOSSES</Text>
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
    color: "rgba(0,0,0,0.87)",
    fontSize: 28,
    fontFamily: "comic-sans-ms-regular"
  }
});
