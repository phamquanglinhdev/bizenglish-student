import {useState} from "react";
import {Image, Text, View} from "react-native";
import css from "../css/style";
import {Button, TextInput} from "react-native-paper";
import {connect} from "react-redux";
import {CommonActions} from "@react-navigation/native";

const LoginActivity = (props) => {
    const store = props
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const loginAction = () => {
        store.navigation.dispatch(
            CommonActions.reset({
                index: 1,
                routes: [
                    {name: "MainActivity"},
                ]
            })
        )
    }
    return (
        <View style={[css.container, css.flexible, {padding: 20}]}>
            <Image
                style={{
                    width: 160,
                    height: 160,
                    marginBottom: 40
                }}
                source={{uri: "https://i.pinimg.com/originals/10/e3/6a/10e36a159b29a2b5833e2d0e176607f5.png"}}
            />
            <TextInput
                label="Email"
                value={email}
                onChangeText={text => setEmail(text)}
                style={{
                    marginBottom: 20,
                    width: '100%'
                }}
                mode={"outlined"}
            />
            <TextInput
                label="Mật khẩu"
                value={password}
                onChangeText={text => setPassword(text)}
                style={{
                    marginBottom: 20,
                    width: '100%'
                }}
                mode={"outlined"}
            />
            <Button
                mode={"contained"}
                style={[css.roundedBtn, css.w100]}
                onPress={loginAction}
            >ĐĂNG NHẬP</Button>
        </View>
    )
}
export default connect(state => ({store: state}))(LoginActivity)