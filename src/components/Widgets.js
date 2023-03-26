import {View} from "react-native";
import ProcessWidget from "./ProcessWidget";

const Widgets = (props) => {
    return (
        <View style={{padding: 10, flexDirection: "row", justifyContent: "space-around"}}>
            <ProcessWidget
                image={require("../../src/media/presentation.gif")}
            />
            <ProcessWidget
                image={require("../../src/media/history.gif")}
            />
            <ProcessWidget
                image={require("../../src/media/speech-bubble.gif")}
            />
            <ProcessWidget
                image={require("../../src/media/video-channel.gif")}
            />
            <ProcessWidget
                image={require("../../src/media/alarm.gif")}
            />

            {/*<ProcessWidget/>*/}
            {/*<ProcessWidget/>*/}
            {/*<ProcessWidget/>*/}
            {/*<ProcessWidget/>*/}
        </View>
    )
}
export default Widgets;