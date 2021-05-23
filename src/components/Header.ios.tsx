import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface TodoHeaderProps {
  changeTheme: () => void;
  isDark: boolean;
}

export function Header({ changeTheme, isDark }: TodoHeaderProps) {
  return (
    <SafeAreaView style={[styles.container, isDark && {backgroundColor: '#3e3e3e'}]}>
      <View style={[styles.header, isDark && {backgroundColor: '#3e3e3e'}]}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      </View>
      <View style={styles.switchContainer}>
        <Switch
          trackColor={{ false: "#767577", true: "#f4f3f4" }}
          thumbColor={isDark ? "#12a952" : "#f4f3f4"}
          onValueChange={changeTheme}
          value={isDark}
        />
        <Text style={[styles.headerText, {fontSize: 18, marginLeft: 8}]}>Dark</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
    flexDirection: 'row'
  },
  header: {
    flex: 1,
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
  },
  switchContainer: {
    flexDirection: 'row',
    marginRight: 8,
    alignItems: 'center',
    marginBottom: 32
  }
});
