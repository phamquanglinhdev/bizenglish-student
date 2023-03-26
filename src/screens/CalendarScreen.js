import {View, Text, ScrollView} from "react-native";
import {Button, Chip} from "react-native-paper";
import css from "../css/style";
import {useState} from "react";
import {connect} from "react-redux";

const CalendarScreen = (props) => {
    const [calendar, setCalendar] = useState([
        {
            name: "Thứ 2",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        },
        {
            name: "Thứ 3",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        },
        {
            name: "Thứ 4",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        }
        ,
        {
            name: "Thứ 5",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        }
        ,
        {
            name: "Thứ 6",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        }
        ,
        {
            name: "Thứ 7",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        },
        {
            name: "Chủ nhật",
            times: [
                {grade: {id: 1, name: "C001"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 2, name: "C003"}, value: {start: '14:30', end: "15:30"}},
                {grade: {id: 1, name: "C005"}, value: {start: '14:30', end: "15:30"}}
            ]
        }
    ])
    return (
        <View style={{padding: 10}}>
            <Text style={{fontWeight: "bold", marginVertical: 10, fontSize: 20, textAlign: "center"}}>
                Lịch học
            </Text>
            <ScrollView >
                <View style={{paddingBottom:60}}>
                    {calendar.map((item, key) =>
                        <>
                            <Chip style={{marginBottom: 5}} key={key}>{item.name}</Chip>
                            {item.times.map((time, index) =>
                                <View key={index} style={{flexDirection: "row", alignItems: "center"}}>
                                    <Button
                                        onPress={() => {
                                            console.log(time.grade.id)
                                        }}
                                        icon={"google-classroom"}
                                    >{time.grade.name}</Button>
                                    <Button icon={"clock"} textColor={"gray"}>{time.value.start}</Button>
                                    <Button icon={"clock"} textColor={"gray"}>{time.value.end}</Button>
                                </View>
                            )}
                        </>
                    )}
                </View>
            </ScrollView>
        </View>
    )
}
export default connect(state => ({props: state}))(CalendarScreen)