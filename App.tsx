/// <reference types="nativewind/types"/>
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';



import LanguageContext from './src/languages/languageContext';
import StudentStack from './src/navigations/StudentStack';
const defaultLanguage= 'en'
export default function App() {
  
  return (
    <LanguageContext.Provider value={{language: defaultLanguage}}>

    <NavigationContainer>
    <StudentStack/>
    </NavigationContainer>
    </LanguageContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
