import {connect} from "react-redux";
import {View, StyleSheet, ImageBackground, Text} from "react-native";
import Widgets from "../components/Widgets";

const background = "https://c4.wallpaperflare.com/wallpaper/1021/744/891/blurred-colorful-vertical-portrait-display-wallpaper-preview.jpg"
const HomeScreen = () => {
    return (
        <ImageBackground source={{uri: background}} resizeMode={"cover"} style={style.container}>
            <View style={{flex: 0.2, justifyContent: "center"}}>
                <View style={{justifyContent: "center", alignItems: "center", marginBottom: 10}}>
                    <Text style={{color: "white", fontWeight: "bold", fontSize: 15}}>Xin chào , Phạm Quang Linh</Text>
                </View>
                <Widgets/>
            </View>
            <View style={{
                flex: 0.8,
                backgroundColor: "white",
                borderTopStartRadius: 40,
                borderTopEndRadius: 40,
            }}>
                <View style={{padding: 30}}>

                </View>
            </View>
        </ImageBackground>
    )
}
export default connect(state => ({props: state}))(HomeScreen)
const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6200ee"
    }
})