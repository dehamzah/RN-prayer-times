import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ModalSelector from 'react-native-modal-selector'
import PrayerTimes from 'prayer-times';
import Header from './src/components/Header';
import PrayTimeLists from './src/components/PrayTimeLists';
import colors from './src/constants/colors';


const prayTimes = new PrayerTimes();
const locations = [
  {
    key: 1,
    label: 'Jakarta',
    coord: [6.1751, 106.8650]
  },
  {
    key: 2,
    label: 'Depok',
    coord: [6.4025, 106.7942]
  },
  {
    key: 3,
    label: 'Tangerang',
    coord: [6.2024, 106.6527]
  },
  {
    key: 4,
    label: 'Bekasi',
    coord: [6.2383, 106.9756]
  }
]

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      times: prayTimes.getTimes(new Date(), locations[0].coord, +7, 'auto', '24h'),
      locationSelected: locations[0]
    }
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Header location={this.state.locationSelected.label} />
        <ModalSelector
          style={styles.locationSelector}
          data={locations}
          initValue="Jakarta"
          onChange={(option) => { 
            this.setState({
              times: prayTimes.getTimes(new Date(), option.coord, +7, 'auto', '24h'),
              locationSelected: option
            }) 
          }} />

        <PrayTimeLists times={this.state.times} />

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
  configContainer: {
    alignItems: 'flex-end',
    paddingBottom: 15
  },
  locationSelector: {
    marginBottom: 10
  }
});
