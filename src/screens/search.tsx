import React from 'react';
import { useState } from 'react';
import { Linking, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';
import { openURL } from '../helpers/urlHelper';

import { ScreenNavigationProps } from '../routes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
  },
  text: {
    paddingBottom: 24,
  },
  dropdown: {
    backgroundColor: '#d5ded7',
    justifyContent: 'center',
    width: '100%',
  },
  safeContainerStyle: {
    flex: 1,
    margin: 20,
    justifyContent: 'center',
  },
  spacerStyle: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 24,
    paddingBottom: 24,
    color: '#000000',
  },
});

const stations = [
  {
    label: 'London Liverpool Street',
    value: 'LST',
  },
  {
    label: 'London Kings Cross',
    value: 'KGX',
  },
  {
    label: 'Edinburgh Waverley',
    value: 'EDB',
  },
  {
    label: 'Cambridge',
    value: 'CBG',
  },
  {
    label: 'Glasgow Main Station',
    value: 'GLW',
  },
  {
    label: 'Manchester Picadilly',
    value: 'MAN',
  },
];

type SearchScreenProps = ScreenNavigationProps<'Search'>;

const SearchScreen: React.FC<SearchScreenProps> = ({ navigation }) => {
  const [showDepartureDropdown, setShowDepartureDropdown] = useState(false);
  const [selectedDepartureItem, setSelectedDepartureItem] = useState(
    stations[0].value,
  );

  const [showArrivalDropdown, setShowArrivalDropdown] = useState(false);
  const [selectedArrivalItem, setSelectedArrivalItem] = useState(
    stations[0].value,
  );
  return (
    <Surface style={styles.container}>
      <SafeAreaView style={styles.safeContainerStyle}>
        <Text style={styles.heading}>Select departure and arrivals</Text>
        <DropDown
          label={'Departure Station'}
          mode={'outlined'}
          multiSelect={false}
          visible={showDepartureDropdown}
          showDropDown={() => setShowDepartureDropdown(true)}
          onDismiss={() => setShowDepartureDropdown(false)}
          value={selectedDepartureItem}
          setValue={setSelectedDepartureItem}
          list={stations}
        />
        <View style={styles.spacerStyle} />
        <DropDown
          label={'Arrival Station'}
          mode={'outlined'}
          multiSelect={false}
          visible={showArrivalDropdown}
          showDropDown={() => setShowArrivalDropdown(true)}
          onDismiss={() => setShowArrivalDropdown(false)}
          value={selectedArrivalItem}
          setValue={setSelectedArrivalItem}
          list={stations}
        />
        <View style={styles.spacerStyle} />
        <Button
          mode="contained"
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onPress={() =>
            openURL(
              `https://www.lner.co.uk/travel-information/travelling-now/live-train-times/depart/${selectedDepartureItem}/${selectedArrivalItem}/#LiveDepResults`,
            )
          }
        >
          Select Journey
        </Button>
      </SafeAreaView>
    </Surface>
  );
};

export default SearchScreen;
