import React from 'react';
import { View, StyleSheet } from 'react-native';
import PrayerTimes from 'prayer-times';
import PrayTimeItem from './PrayTimeItem';
import prayNames from '../constants/prayNames';
import prayIcons from '../constants/prayIcons';

const prayTimes = new PrayerTimes();


export default class PrayTimeLists extends React.Component {
    constructor(props) {
        super(props);
        
        const times = prayTimes.getTimes(new Date(), [-6.337601, 106.691660], +7, 'auto', '24h');

        this.state = {
            times: times
        }
    }


    render() {
        const lists = Object.keys(this.state.times).map(key => {
            const _name = prayNames[key];
            if (key === "imsak" || key === "sunset" || key === "midnight") {
                return;
            }
            return <PrayTimeItem key={key} name={_name} time={this.state.times[key]} icon={prayIcons[key][0]} />
        })
        return (
            <View>
                {lists}
            </View>
        )
    }
}
