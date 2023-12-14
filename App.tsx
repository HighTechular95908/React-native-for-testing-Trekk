/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import PassportReader from './src/PassportReader';
import UploadDocumentPicker from './src/components/uploadDocumentPicker'
import UploadImagePicker from './src/components/UploadImagePicker';
function App(): React.JSX.Element {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={{backgroundColor:"#555"}}>
      
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        {/* <PassportReader /> */}
        <UploadDocumentPicker />
        <UploadImagePicker />
      </ScrollView>
      
    </SafeAreaView>
  );
}

export default App;
