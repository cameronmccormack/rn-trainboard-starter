import React from 'react';
import { useState } from 'react';
import { Linking, SafeAreaView, StyleSheet, View } from 'react-native';
import { Text, Button, Surface } from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

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
    label: 'ZKX',
    value: 'ZKX',
  },
  {
    label: 'EDB',
    value: 'EDB',
  },
  {
    label: 'CBG',
    value: 'CBG',
  },
  {
    label: 'GLW',
    value: 'GLW',
  },
  {
    label: 'MAN',
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
        <Button mode="contained" onPress={() => navigation.navigate('Details')}>
          Select Journey
        </Button>
      </SafeAreaView>
    </Surface>
  );
};


export default SearchScreen;
