import {Image, Text, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, View} from "react-native";

const ProcessWidget = (props) => {
    return (
        <TouchableWithoutFeedback onPress={() => {
            console.log("h")
        }}>
            <View style={imgBorder}>
                <Image source={props.image} style={container}></Image>
            </View>

        </TouchableWithoutFeedback>
    )
}
export default ProcessWidget;
const container = {
    width: 50,
    height: 50,
    overlayColor: 'white',

}
const imgBorder = {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 15,
    overflow: 'hidden',
    borderColor: 'purple',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
}