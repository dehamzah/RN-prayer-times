import React from 'react';
import { View, StyleSheet } from 'react-native';
import PrayTimeItem from './PrayTimeItem';
import prayNames from '../constants/prayNames';
import prayIcons from '../constants/prayIcons';
import colors from '../constants/colors';


export default class PrayTimeLists extends React.Component {
    render() {
        const lists = Object.keys(this.props.times).map(key => {
            const _name = prayNames[key];
            if (key === "imsak" || key === "sunset" || key === "midnight") {
                return;
            }
            return <PrayTimeItem key={key} name={_name} time={this.props.times[key]} icon={prayIcons[key][0]} />
        })
        return (
            <View>
                {lists}
            </View>
        )
    }
}

