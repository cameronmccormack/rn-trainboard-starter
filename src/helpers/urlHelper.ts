import { Linking } from 'react-native';

export const openURL = (url: string) =>
  Linking.openURL(url).catch((error) => {
    console.error('An error occurred: ', error);
  });
