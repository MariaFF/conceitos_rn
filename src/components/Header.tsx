import React from 'react';
import { View, Text, StatusBar, StyleSheet, TouchableOpacity, Switch } from 'react-native';

interface TodoHeaderProps {
  changeTheme: () => void;
  isDark: boolean;
}

export function Header({ changeTheme, isDark }: TodoHeaderProps) {
  return (
    <View style={[styles.header, isDark && {backgroundColor: '#3e3e3e'}]}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <View style={{ backgroundColor: '#fff', flexDirection: 'row' }}>
        <Switch />
        <Text>Dark</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  }
});
