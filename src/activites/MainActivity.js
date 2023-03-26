import {connect} from "react-redux";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screens/HomeScreen";
import SettingScreen from "../screens/SettingScreen";
import {BottomNavigation} from "react-native-paper";
import {useState} from "react";
import {StatusBar} from "react-native";
import CalendarScreen from "../screens/CalendarScreen";

const Tab = createBottomTabNavigator();
const MainActivity = (props) => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        {
            key: 'home',
            title: 'Trang chủ',
            focusedIcon: 'home',
            unfocusedIcon: 'home-outline',
            accessibilityLabel: "Trang chủ"
        },
        {
            key: 'calendar',
            title: 'Lịch học',
            focusedIcon: 'calendar',
            unfocusedIcon: 'calendar-outline',
            navigation: props.navigation
        },
        {
            key: 'setting',
            title: 'Cài đặt',
            focusedIcon: 'cog',
            unfocusedIcon: 'cog-outline',
            navigation: props.navigation
        },
    ]);
    const renderScene = BottomNavigation.SceneMap({
        home: HomeScreen,
        calendar: CalendarScreen,
        setting: SettingScreen,
    });
    return (
        <>
            <StatusBar/>
            <BottomNavigation
                compact={true}
                navigationState={{index, routes}}
                onIndexChange={setIndex}
                renderScene={renderScene}
            />
        </>
    )
}
export default connect(state => ({props: state}))(MainActivity)