import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Data_Update from "./Data_update";


export default class MaterialHeader2 extends Component {
 

  render() {
  
    
    return (
     
      <View style={[styles.container, this.props.style]}>
        
        <View
          style={{
            flexDirection: "row",
            marginLeft: 5,
            marginTop: 5,
            marginBottom: 5
          }}
        >
          <TouchableOpacity style={styles.leftIconButton}>

            {/*responds to your click on the Header title*/}
            <MaterialCommunityIconsIcon name="menu" style={styles.leftIcon} />
          </TouchableOpacity>
          <View style={styles.textWrapper}>
            <Text numberOfLines={1} style={styles.title}>
            </Text>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row"
          }}
        />
        <View style={styles.rightIconsWrapper}>
          <TouchableOpacity style={styles.iconButton} />
            <MaterialCommunityIconsIcon
              name="magnify"
              style={styles.rightIcon1}/>
         
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIconsIcon
              name="dots-vertical"
              style={styles.rightIcon2}
              onPress={() => Alert.alert(Data_Update.fetchAndLog())}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a30505",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 4,
    elevation: 3,
    shadowOffset: {
      height: 2,
      width: 0
    },
    shadowColor: "#111",
    shadowOpacity: 0,
    shadowRadius: 1
  },
  leftIconButton: {
    padding: 11
  },
  leftIcon: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  textWrapper: {
    alignSelf: "flex-end",
    marginLeft: 21,
    marginBottom: 14
  },
  title: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontSize: 18,
    lineHeight: 18
  },
  rightIconsWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 5,
    marginTop: 5
  },
  iconButton: {
    padding: 11
  },
  rightIcon1: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  },
  rightIcon2: {
    backgroundColor: "transparent",
    color: "#FFFFFF",
    fontFamily: "roboto-regular",
    fontSize: 24
  }
});
