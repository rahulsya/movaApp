import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Header({title}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    color: '#394D6F',
    fontFamily: 'Urbanist-Bold',
  },
});
