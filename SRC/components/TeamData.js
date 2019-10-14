import { colors } from "react-native-elements";
var BlueAlliance = require("bluealliance");
var tba = new BlueAlliance("5moc2mQHVZULRz5kVRJ5izYANiD6Jsws5DIGOV9xOvWHjBPiQfcBwWXzVSC88Y7l");

export default teams();
export default class TeamData{

        teams = async function () {
            var team_name = await tba.getTeam(5740)
            Console.log(team_name);
        }
    
}