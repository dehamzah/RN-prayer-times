import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../constants/colors';


export default class PrayTimeItem extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <View>
                    <Text style={styles.prayName}>{this.props.name}</Text>
                    <Text style={styles.prayTime}>{this.props.time}</Text>
                </View>
                <View style={{ justifyContent: 'center' }}>
                    <Image style={styles.icon} resizeMode="contain" source={this.props.icon} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 15,
        backgroundColor: 'white',
        marginBottom: 2
    },
    prayName: {
        fontSize: 14,
        color: colors.brownish_grey
    },
    prayTime: {
        fontSize: 18,
        color: colors.brownish_grey
    },
    icon: {
        width: 35,
        height: 30
    }
})