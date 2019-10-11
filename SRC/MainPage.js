import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialHeader2 from "./components/MaterialHeader2";
import { Container } from "native-base";


export default class MainWindow extends Component {
  
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rect}>
                    <MaterialHeader2 style={styles.materialHeader2} />
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        width: 375,
        height: 812
    },
    rect: {
        width: 375,
        height: 812,
        backgroundColor: "rgba(169, 169, 169,1)"
    },
    materialHeader2: {
        width: 375,
        height: 56,
        marginTop: 31
    }
});
