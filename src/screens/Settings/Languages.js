import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Header from '../../components/molecules/Header';
import {useTranslation} from 'react-i18next';

export default function Languages() {
  const {i18n, t} = useTranslation();
  const [currentLang, setCurrentLang] = useState(null);

  const data = [
    {
      name: 'Bahasa Indonesia',
      value: 'id',
    },
    {
      name: 'English',
      value: 'en',
    },
  ];

  return (
    <View style={styles.container}>
      <Header title={t('headerSettingLanguage')} />
      {data?.map((item, index) => {
        return (
          <TouchableOpacity
            key={index}
            onPress={() => {
              i18n.changeLanguage(item.value);
              setCurrentLang(item);
            }}
            style={styles.cardContainer({
              active: item.name === currentLang?.name ? true : false,
            })}>
            <Text style={styles.title}>{item.name}</Text>
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
