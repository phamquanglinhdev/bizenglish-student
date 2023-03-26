import {StyleSheet} from "react-native";

const css = StyleSheet.create({
    container: {
        flex: 1,
        padding: 1
    },
    flexible: {justifyContent: "center", alignItems: "center"},
    roundedBtn: {
        borderRadius: 5
    },
    w100: {
        width: "100%"
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    }
})
export default css