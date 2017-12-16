import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../constants/colors';

export default class Header extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.dateText}>29 Rabiul Awal 1439 / 17 Des 2017</Text>
                <Text style={styles.locationText}>Depok, Indonesia</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        paddingBottom: 35
    },
    dateText: {
        fontSize: 16,
        color: colors.greyish_brown
    },
    locationText: {
        fontSize: 12,
        color: colors.brownish_grey
    }
})