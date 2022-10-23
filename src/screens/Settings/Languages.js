import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/Header';

export default function Languages() {
  const [currentLang, setCurrentLang] = useState('English');

  const data = ['Indonesia', 'English'];
  return (
    <View style={styles.container}>
      <Header title={'Setting Language'} />
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => setCurrentLang(item)}
            style={styles.cardContainer({
              active: item === currentLang ? true : false,
            })}>
            <Text style={styles.title}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
  },
  cardContainer: ({active}) => ({
    padding: 16,
    flexDirection: 'row',
    // alignItems: 'center',
    borderWidth: 1,
    borderRadius: 16,
    marginBottom: 12,
    borderColor: active ? '#394D6F' : '#EBEAF8',
  }),
  title: {
    fontSize: 16,
    color: '#394D6F',
    fontFamily: 'Urbanist-Bold',
  },
});
