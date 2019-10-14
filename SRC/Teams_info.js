import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import TeamNumber from "./components/TeamNumber";
import WinsDisplay from "./components/WinsDisplay";
import LossesDisplay from "./components/LossesDisplay";
import Alliances from "./components/Alliances";
import Comments from "./components/Comments";
import PageHeaderTeam from "./components/PageHeaderTeam";

export default class Teams_info extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View
                    style={[
                        styles.stack,
                        {
                            height: 812,
                            width: 375
                        }
                    ]}
                >
                    <View style={styles.rect}>
                        <TeamNumber style={styles.materialChipWithImage} />
                        <View
                            style={[
                                styles.row,
                                {
                                    marginTop: 124,
                                    height: 32
                                }
                            ]}
                        >
                            <WinsDisplay style={styles.materialChipBasic1} />
                            <LossesDisplay style={styles.materialChipBasic2} />
                        </View>
                        <Alliances style={styles.materialChipBasic3} />
                        <Comments style={styles.materialRightIconTextbox} />
                    </View>
                    <PageHeaderTeam style={styles.materialHeader11} />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    stack: {
        position: "relative"
    },
    rect: {
        top: 69,
        left: 0,
        width: 375,
        height: 743,
        backgroundColor: "rgba(34,34,34,1)",
        position: "absolute"
    },
    materialChipWithImage: {
        width: 150,
        height: 32,
        marginTop: 13,
        marginLeft: 113
    },
    row: {
        flexDirection: "row"
    },
    materialChipBasic1: {
        width: 150,
        height: 32
    },
    materialChipBasic2: {
        width: 150,
        height: 32,
        marginLeft: 75
    },
    materialChipBasic3: {
        width: 150,
        height: 32,
        marginTop: 80,
        marginLeft: 113
    },
    materialRightIconTextbox: {
        width: 375,
        height: 43,
        marginTop: 335
    },
    materialHeader11: {
        top: 0,
        left: 0,
        width: 375,
        height: 69,
        position: "absolute"
    }
});
