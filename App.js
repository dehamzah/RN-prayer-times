import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Header />
        <PrayTimeLists />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pale_grey,
    padding: 30,
  },
});
